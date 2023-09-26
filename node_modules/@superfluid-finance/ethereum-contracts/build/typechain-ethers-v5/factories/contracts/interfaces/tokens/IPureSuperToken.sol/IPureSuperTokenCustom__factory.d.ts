import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPureSuperTokenCustom, IPureSuperTokenCustomInterface } from "../../../../../contracts/interfaces/tokens/IPureSuperToken.sol/IPureSuperTokenCustom";
export declare class IPureSuperTokenCustom__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "initialSupply";
            readonly type: "uint256";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IPureSuperTokenCustomInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPureSuperTokenCustom;
}
//# sourceMappingURL=IPureSuperTokenCustom__factory.d.ts.map