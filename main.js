import {startStream, loadBalance, isStreamStarted, stopStream, fund} from "./modules/stream.mjs";

const BASE_GOERLI = '0x14a33';
const opt = {
    forceInjectProvider: typeof window.ethereum === 'undefined',
    enableDebug: true
}
const MMSDK = new MetaMaskSDK.MetaMaskSDK(opt);
var chainId = window.ethereum.networkVersion;
setTimeout(() => {
    setupWallet();
}, 0)

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
        console.log("Chain " + chainId + " not supported");
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

function handleChain() {
    const ethereum = MMSDK.getProvider();
    ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{chainId: BASE_GOERLI}]
    }).then(() => {
        chainId = BASE_GOERLI;
        setupWallet();
    })
}

function handleConnected(connectInfo) {
    console.log("Connected to chain " + connectInfo.chainId);
    if (connectInfo.chainId !== BASE_GOERLI) {
        handleChain();
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

function  handleWalletSetup() {
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
    if (chainId !== BASE_GOERLI) {
        handleChain();
    } else {
        ethereum.request({method: 'eth_requestAccounts'}).then((accounts) => {
            console.log(accounts);
            account = accounts[0];
            handleWalletSetup();
        })
    }
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
    decimals
) {
    return ethers.FixedNumber.from(ethers.utils.formatUnits(value, decimals))
        .round(6)
        .toString();
}

function updateBalance() {
    console.log("Balance " + balance);
    document.getElementById('tokenBalance').textContent = formatUnits(balance, 18);
    if (balance.lt(1000)) {
        console.log("Received balance of " + balance);
        document.getElementById('stream-start').disabled = true;
        document.getElementById('warning-box').hidden = false;
    }
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

// Initial setup
updateConnectionStatus();

// Attach a click event listener to the "Connect" button
const connectButton = document.getElementById('connect-button');
connectButton.addEventListener('click', connect);

function fundme() {
    fund(account).then((tx) => {
        console.log("Account funded " + tx);
    }).catch((error) => {
        console.log(JSON.stringify(error));
    })
}

document.getElementById('stream-start').addEventListener('click', switchStream);
document.getElementById('fundme').addEventListener('click', fundme)
