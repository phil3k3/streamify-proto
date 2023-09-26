import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISuperAgreement, ISuperAgreementInterface } from "../../../../contracts/interfaces/superfluid/ISuperAgreement";
export declare class ISuperAgreement__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "agreementType";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "time";
            readonly type: "uint256";
        }];
        readonly name: "realtimeBalanceOf";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "dynamicBalance";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "owedDeposit";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ISuperAgreementInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISuperAgreement;
}
//# sourceMappingURL=ISuperAgreement__factory.d.ts.map