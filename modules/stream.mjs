import { cfa } from "./cfa.mjs";
import { erc20 } from "./erc20.mjs";

const web3 = new Web3(window.ethereum);

export function startStream() {

    // method createFlow
    // supertoken: 0xd5fd867e6dd8f9345cd0c99ce6a500034671c625
    // receiver: 0x6D7e59211Fa846c020c0B44397587133FE95831d
    // flowRate: 1000000
    // ctx: encoded sender
    console.log(cfa);
    console.log(erc20);
    const contract = new web3.eth.Contract(erc20, '0xcfa132e353cb4e398080b9700609bb008eceb125');
    contract.methods.createFlow('0xd5fd867e6dd8f9345cd0c99ce6a500034671c625',
                                '0xFe2d773a0120Bcd55ccC2782390051f3b68a05f2',
                                '0x6D7e59211Fa846c020c0B44397587133FE95831d',
                                10000,
                                '0x').call().then(response => {
                                    console.log("Create flow " + response);
                                });
}

export function loadERC20TokenBalance(account)  {
    const superToken = '0xd5fd867e6dd8f9345cd0c99ce6a500034671c625';
    console.log('Loading balance for token ' + superToken);
    const contract = new web3.eth.Contract(erc20, superToken);
    console.log(contract.methods);
    return contract.methods.balanceOf(account).call();
}