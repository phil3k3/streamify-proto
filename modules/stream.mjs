import { cfa } from "./cfa.mjs";
import { erc20 } from "./erc20.mjs";

const provider = new ethers.providers.Web3Provider(window.ethereum)
const contract = new ethers.Contract('0xcfa132e353cb4e398080b9700609bb008eceb125', cfa, provider);
const superToken = '0xd5fd867e6dd8f9345cd0c99ce6a500034671c625';

export async function startStream(address) {
    const contractWithSigner = contract.connect(provider.getSigner());
    return contractWithSigner.createFlow(
                                '0xd5fd867e6dd8f9345cd0c99ce6a500034671c625',
                                address,
                                '0x6D7e59211Fa846c020c0B44397587133FE95831d',
                                10000,
                                new TextEncoder().encode('')
    );
}

export async function loadERC20TokenBalance(account)  {
    console.log('Loading balance for token ' + superToken);
    const contract = new ethers.Contract(superToken, erc20, provider);
    console.log(contract);
    return contract.balanceOf(account);
}

export async function isStreamStarted(address){
    return contract.getFlowInfo(superToken, address, '0x6D7e59211Fa846c020c0B44397587133FE95831d');
}

export async function stopStream(address) {
    const contractWithSigner = contract.connect(provider.getSigner());
    return contractWithSigner.deleteFlow(
            '0xd5fd867e6dd8f9345cd0c99ce6a500034671c625',
            address,
            '0x6D7e59211Fa846c020c0B44397587133FE95831d',
            new TextEncoder().encode('')
    );
}