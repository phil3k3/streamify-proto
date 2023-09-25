import { cfa } from "./cfa.mjs";
import { erc20 } from "./erc20.mjs";
// import { superTokenAbi } from './superToken.mjs';

const provider = new ethers.providers.Web3Provider(window.ethereum)
const contract = new ethers.Contract('0xcfa132e353cb4e398080b9700609bb008eceb125', cfa, provider);
const superToken = '0x4ec89df8b16474a9333bb94a5f21197ef89a8d87';
const fDAIx = "0x5735C32C38f5Af0FB04a7c77C832Ba4D7aBfFeC8"

const receiver = '0x6D7e59211Fa846c020c0B44397587133FE95831d';
const flowRate = 2777777800000000;

export async function startStream(address) {
    const contractWithSigner = contract.connect(provider.getSigner());
    return contractWithSigner.createFlow(
                                superToken,
                                address,
                                receiver,
                                flowRate,
                                new TextEncoder().encode('')
    );
}

export async function loadBalance(account)  {
    console.log('Loading balance for token ' + superToken);
    const contract = new ethers.Contract(superToken, erc20, provider);
    console.log(contract);
    return contract.balanceOf(account);
}

export async function loadBalanceFDAIX(account)  {
    console.log('Loading balance for token ' + fDAIx);
    const contract = new ethers.Contract(fDAIx, erc20, provider);
    console.log(contract);
    return contract.balanceOf(account);
}

export async function isStreamStarted(address){
    return contract.getFlowInfo(superToken, address, receiver);
}

export async function stopStream(address) {
    const contractWithSigner = contract.connect(provider.getSigner());
    return contractWithSigner.deleteFlow(
            superToken,
            address,
            receiver,
            new TextEncoder().encode('')
    );
}

export async function fund(address){
    const contract = new ethers.Contract(fDAIx, erc20, provider);
    const contractWithSigner = contract.connect(provider.getSigner());
    return contractWithSigner.mint(address, '100000000000000000000');
}

