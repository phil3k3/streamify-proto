import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISETHCustom, ISETHCustomInterface } from "../../../../../contracts/interfaces/tokens/ISETH.sol/ISETHCustom";
export declare class ISETHCustom__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "downgradeToETH";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "upgradeByETH";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "upgradeByETHTo";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): ISETHCustomInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISETHCustom;
}
//# sourceMappingURL=ISETHCustom__factory.d.ts.map