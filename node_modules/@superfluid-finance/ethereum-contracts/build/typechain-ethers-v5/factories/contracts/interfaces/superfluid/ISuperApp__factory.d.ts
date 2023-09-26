import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISuperApp, ISuperAppInterface } from "../../../../contracts/interfaces/superfluid/ISuperApp";
export declare class ISuperApp__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "agreementId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "agreementData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "cbdata";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "afterAgreementCreated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "agreementId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "agreementData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "cbdata";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "afterAgreementTerminated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "agreementId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "agreementData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "cbdata";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "afterAgreementUpdated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "agreementId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "agreementData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "beforeAgreementCreated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "cbdata";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "agreementId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "agreementData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "beforeAgreementTerminated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "cbdata";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "agreementId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "agreementData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "beforeAgreementUpdated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "cbdata";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ISuperAppInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISuperApp;
}
//# sourceMappingURL=ISuperApp__factory.d.ts.map