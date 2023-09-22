import {startStream, loadBalance, isStreamStarted, stopStream} from "./modules/stream.mjs";

const BASE_GOERLI = '0x14a33';
const opt = {
    forceInjectProvider: typeof window.ethereum === 'undefined',
    enableDebug: true
}
const MMSDK = new MetaMaskSDK.MetaMaskSDK(opt);
setTimeout(() => {
    setupWallet();
}, 0)

var chainId = window.ethereum.networkVersion;
var account = '';
var intervalId = '';
var streamState = 'stopped';
var balance = '';

window.ethereum.on('chainChanged', handleChainChanged)
window.ethereum.on('accountsChanged', handleAccountsChanged);
window.ethereum.on('connect', handleConnected);
window.ethereum.on('disconnect', handleDisconnect);
window.ethereum.on('message', handleMessage);

export function connect(){
    console.log("Reloading");
    location.reload();
}

export function isConnected() {
    return window.ethereum.isConnected() && account && balance;
}

function handleChainChanged(newChainId) {
    console.log("Chain changed to " + newChainId);
    if (newChainId !== BASE_GOERLI) {
        log.innerHTML += "<br /><div style='color: red'>Chain " + chainId + " not supported</div>";
        disableStream();
    }
    else {
        chainId = newChainId;
        handleWalletSetup();
    }
}

function disableStream() {
    document.getElementById('stream-start').disabled = true;
    document.getElementById('tokenBalance').textContent = '0';
}

function handleAccountsChanged(newAccount) {
    console.log("Account changed to " + newAccount);
    account = newAccount;
    handleWalletSetup();
}

function handleConnected(connectInfo) {
    console.log("Connected to chain " + connectInfo.chainId);
    const ethereum = MMSDK.getProvider();
    if (connectInfo.chainId !== BASE_GOERLI) {
        ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{chainId: BASE_GOERLI}]
        }).then(() => {
            chainId = connectInfo.chainId;
            setupWallet();
        })
    } else {
        chainId = connectInfo.chainId;
        setupWallet();
    }
}

function handleDisconnect(connectInfo) {
    console.log("Disconnected " + connectInfo);
    disableStream();
}

function handleMessage(message) {
    console.log("Message: " + message);
}


function    handleWalletSetup() {
    console.log("Wallet connected: " + account + " Chain: " + chainId);
    document.getElementById('stream-start').disabled = false;
    loadBalance(account).then((newBalance) => {
        balance = newBalance;
        updateBalance();
        updateConnectionStatus();
        isStreamStarted(account).then((result) => {
            var flowRate = parseInt(result.flowrate,16);
            if (flowRate > 0) {
                var button = document.getElementById('stream-start');
                console.log("Stream already started.");
                button.textContent = "Stop stream";
                streamState = 'started';
                startSimulation();
            }
        })
    })
}

function setupWallet() {
    const ethereum = MMSDK.getProvider()
    ethereum.request({method: 'eth_requestAccounts'}).then((accounts) => {
        console.log(accounts);
        account = accounts[0];
        handleWalletSetup();
    })
}

export function switchStream() {
    console.log("Switching on/off stream...");
    var button = document.getElementById('stream-start');
    button.disabled = true;
    if (streamState === 'stopped') {
        console.log("Starting stream...");
        startStream(account).then((tx) => {
            console.log(tx);
            console.log("Stream started.");
            button.textContent = "Stop stream";
            streamState = 'started';
            startSimulation();
        }).catch((result) => {
            console.error("ERROR + " + JSON.stringify(result));
        }).finally(() => {
            button.disabled = false;
        })
    } else if (streamState === 'started') {
        console.log("Stopping stream...");
        stopStream(account).then((tx) => {
            console.log(tx);
            console.log("Stream stopped.");
            button.textContent = "Start stream";
            streamState = 'stopped';
            clearInterval(intervalId);
            // TODO refresh balance to get accurate picture
        }).catch((result) => {
            console.error("ERROR + " + JSON.stringify(result));
        }).finally(() => {
            button.disabled = false;
        });
    }
}

function formatUnits(
    value,
    decimals,
    maxDecimalDigits
) {
    return ethers.FixedNumber.from(ethers.utils.formatUnits(value, decimals))
        .round(6)
        .toString();
}

function updateBalance() {
    console.log("Balance " + balance);
    document.getElementById('tokenBalance').textContent = formatUnits(balance, 18, 5);
}

function startSimulation() {
    intervalId = setInterval(function() {
        if (balance <= 0) {
            clearInterval(intervalId);
            console.log("Balance depleted!");
        } else {
            var balanceWei = BigInt(balance);
            const decreaseAmount = BigInt('10000');
            balanceWei -= decreaseAmount;
            balance = balanceWei.toString();
            updateBalance();
        }
    }, 1000);
}

function updateConnectionStatus() {
    const connectedBox = document.getElementById('connected-box');
    const notConnectedBox = document.getElementById('not-connected-box');
    const connectionText = document.getElementById('connection-text');
    const connectButton = document.getElementById('connect-button');

    if (isConnected()) {
        connectedBox.style.display = 'block';
        notConnectedBox.style.display = 'none';
        connectionText.textContent = 'Connected';
        connectButton.style.display = 'none';
    } else {
        connectedBox.style.display = 'none';
        notConnectedBox.style.display = 'block';
        connectionText.textContent = ''; // Clear any previous text
        connectButton.style.display = 'inline-block';
    }
}

// Function to handle the "Connect" button click event
function connectButtonClick() {
    connect();
}

// Initial setup
updateConnectionStatus();

// Attach a click event listener to the "Connect" button
const connectButton = document.getElementById('connect-button');
connectButton.addEventListener('click', connectButtonClick);

document.getElementById('stream-start').addEventListener('click', switchStream);