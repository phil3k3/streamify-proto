import { cfa } from "./cfa.mjs";
import { erc20 } from "./erc20.mjs";
import { fundMe } from "./fundMe.mjs";

const provider = new ethers.providers.Web3Provider(window.ethereum)

const cfaContract = new ethers.Contract('0xcfa132e353cb4e398080b9700609bb008eceb125', cfa, provider);
const superTokenAddress = '0x4ec89df8b16474a9333bb94a5f21197ef89a8d87';
const superToken = new ethers.Contract(superTokenAddress, erc20, provider);
const fundMeContract = new ethers.Contract("0x592eecB1A0Ce66F77c059f9C55B8C133253cd9Ce", fundMe, provider);

const receiver = '0x6D7e59211Fa846c020c0B44397587133FE95831d';
const flowRate = 2777777800000000;

export async function startStream(address) {
    const contractWithSigner = cfaContract.connect(provider.getSigner());
    return contractWithSigner.createFlow(
                                superTokenAddress,
                                address,
                                receiver,
                                flowRate,
                                new TextEncoder().encode('')
    );
}

export async function loadBalance(account)  {
    console.log('Loading balance for token ' + superTokenAddress);
    console.log(superToken);
    return superToken.balanceOf(account);
}

export async function isStreamStarted(address){
    return cfaContract.getFlowInfo(superTokenAddress, address, receiver);
}

export async function stopStream(address) {
    const contractWithSigner = cfaContract.connect(provider.getSigner());
    return contractWithSigner.deleteFlow(
            superTokenAddress,
            address,
            receiver,
            new TextEncoder().encode('')
    );
}

export async function fund(address){
    const contractWithSigner = fundMeContract.connect(provider.getSigner());
    return contractWithSigner.mintAndUpgrade(address);
}

