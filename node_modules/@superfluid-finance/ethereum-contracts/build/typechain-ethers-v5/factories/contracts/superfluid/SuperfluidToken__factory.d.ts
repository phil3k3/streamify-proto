import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { SuperfluidToken, SuperfluidTokenInterface } from "../../../contracts/superfluid/SuperfluidToken";
export declare class SuperfluidToken__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "SF_TOKEN_AGREEMENT_ALREADY_EXISTS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SF_TOKEN_AGREEMENT_DOES_NOT_EXIST";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SF_TOKEN_BURN_INSUFFICIENT_BALANCE";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SF_TOKEN_MOVE_INSUFFICIENT_BALANCE";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SF_TOKEN_ONLY_HOST";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SF_TOKEN_ONLY_LISTED_AGREEMENT";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32[]";
            readonly name: "data";
            readonly type: "bytes32[]";
        }];
        readonly name: "AgreementCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "penaltyAccount";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "rewardAccount";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "rewardAmount";
            readonly type: "uint256";
        }];
        readonly name: "AgreementLiquidated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "liquidatorAccount";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "penaltyAccount";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "bondAccount";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "rewardAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bailoutAmount";
            readonly type: "uint256";
        }];
        readonly name: "AgreementLiquidatedBy";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "liquidatorAccount";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "targetAccount";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "rewardAmountReceiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "rewardAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "targetAccountBalanceDelta";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "liquidationTypeData";
            readonly type: "bytes";
        }];
        readonly name: "AgreementLiquidatedV2";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "slotId";
            readonly type: "uint256";
        }];
        readonly name: "AgreementStateUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }];
        readonly name: "AgreementTerminated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32[]";
            readonly name: "data";
            readonly type: "bytes32[]";
        }];
        readonly name: "AgreementUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "bailoutAccount";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bailoutAmount";
            readonly type: "uint256";
        }];
        readonly name: "Bailout";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "data";
            readonly type: "bytes32[]";
        }];
        readonly name: "createAgreement";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getAccountActiveAgreements";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperAgreement[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "dataLength";
            readonly type: "uint256";
        }];
        readonly name: "getAgreementData";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "data";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "slotId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "dataLength";
            readonly type: "uint256";
        }];
        readonly name: "getAgreementStateSlot";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "slotData";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getHost";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "host";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "isAccountCritical";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isCritical";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isAccountCriticalNow";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isCritical";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "isAccountSolvent";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isSolvent";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isAccountSolventNow";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isSolvent";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "liquidationTypeData";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "liquidatorAccount";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "useDefaultRewardAccount";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "targetAccount";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "rewardAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "int256";
            readonly name: "targetAccountBalanceDelta";
            readonly type: "int256";
        }];
        readonly name: "makeLiquidationPayoutsV2";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "realtimeBalanceOf";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "availableBalance";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "realtimeBalanceOfNow";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "availableBalance";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "owedDeposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "int256";
            readonly name: "delta";
            readonly type: "int256";
        }];
        readonly name: "settleBalance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "dataLength";
            readonly type: "uint256";
        }];
        readonly name: "terminateAgreement";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "data";
            readonly type: "bytes32[]";
        }];
        readonly name: "updateAgreementData";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "slotId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "slotData";
            readonly type: "bytes32[]";
        }];
        readonly name: "updateAgreementStateSlot";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SuperfluidTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperfluidToken;
}
//# sourceMappingURL=SuperfluidToken__factory.d.ts.map