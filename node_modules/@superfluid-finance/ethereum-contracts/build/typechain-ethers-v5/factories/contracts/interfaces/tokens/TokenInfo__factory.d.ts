import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { TokenInfo, TokenInfoInterface } from "../../../../contracts/interfaces/tokens/TokenInfo";
export declare class TokenInfo__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): TokenInfoInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenInfo;
}
//# sourceMappingURL=TokenInfo__factory.d.ts.map