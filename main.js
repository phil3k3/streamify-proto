import { startStream,loadERC20TokenBalance } from "./modules/stream.mjs";


if (!window.ethereum.isMetaMask) {
    document.getElementById('noMetamask').hidden = false;
    document.getElementById('wrapper').hidden = true;
    console.log("Metamask not available");
}

if (!window.ethereum.isConnected()) {
    console.log("Reloading");
    location.reload();
}



const BASE_GOERLI = '0x14a33';
const opt = {
    forceInjectProvider: typeof window.ethereum === 'undefined',
    enableDebug: true
}
const MMSDK = new MetaMaskSDK.MetaMaskSDK(opt);
setTimeout(() => {
    setupWallet();
}, 0)

var chainId = '';
var account = '';
var streamState = 'stopped';

window.ethereum.on('chainChanged', handleChainChanged)
window.ethereum.on('accountsChanged', handleAccountsChanged);
window.ethereum.on('connect', handleConnected);
window.ethereum.on('disconnect', handleDisconnect);
window.ethereum.on('message', handleMessage);

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

function connect() {

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


function handleWalletSetup() {
    document.getElementById('log').innerHTML += "<br />Wallet connected: " + account + " Chain: " + chainId;
    document.getElementById('stream-start').disabled = false;
    loadERC20TokenBalance(account).then((balance) => {
        console.log("Balance " + balance);
        document.getElementById('tokenBalance').textContent = balance;
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
    var log = document.getElementById('log');
    button.disabled = true;
    if (streamState === 'stopped') {
        log.innerHTML += "<br />Starting stream...";
        startStream();
        setTimeout(function streamStarted() {
            log.innerHTML += "<br />Stream started.";
            button.textContent = "Stop stream";
            button.disabled = false;
            streamState = 'started';
        }, 3000);
    } else if (streamState === 'started') {
        log.innerHTML += "<br />Stopping stream...";
        setTimeout(function streamStarted() {
            log.innerHTML += "<br />Stream stopped.";
            button.textContent = "Start stream";
            button.disabled = false;
            streamState = 'stopped';
        }, 3000);
    }
}

document.getElementById('stream-start').addEventListener('click', startStream);