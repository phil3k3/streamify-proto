import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC1820Implementer, IERC1820ImplementerInterface } from "../../../../../@openzeppelin/contracts/utils/introspection/IERC1820Implementer";
export declare class IERC1820Implementer__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "interfaceHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "canImplementInterfaceForAddress";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IERC1820ImplementerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC1820Implementer;
}
//# sourceMappingURL=IERC1820Implementer__factory.d.ts.map