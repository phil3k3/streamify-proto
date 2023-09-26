import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMultiSigWallet, IMultiSigWalletInterface } from "../../../../contracts/interfaces/utils/IMultiSigWallet";
export declare class IMultiSigWallet__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "required";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "destination";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "submitTransaction";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IMultiSigWalletInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMultiSigWallet;
}
//# sourceMappingURL=IMultiSigWallet__factory.d.ts.map