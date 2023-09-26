import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IResolver, IResolverInterface } from "../../../../contracts/interfaces/utils/IResolver";
export declare class IResolver__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "Set";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "get";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "set";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IResolverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IResolver;
}
//# sourceMappingURL=IResolver__factory.d.ts.map