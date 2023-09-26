import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IInstantDistributionAgreementV1, IInstantDistributionAgreementV1Interface } from "../../../../contracts/interfaces/agreements/IInstantDistributionAgreementV1";
export declare class IInstantDistributionAgreementV1__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "IDA_INDEX_ALREADY_EXISTS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "IDA_INDEX_DOES_NOT_EXIST";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "IDA_INDEX_SHOULD_GROW";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "IDA_INSUFFICIENT_BALANCE";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "IDA_OPERATION_NOT_ALLOWED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "IDA_SUBSCRIPTION_ALREADY_APPROVED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "IDA_SUBSCRIPTION_DOES_NOT_EXIST";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "IDA_SUBSCRIPTION_IS_NOT_APPROVED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "IDA_ZERO_ADDRESS_SUBSCRIBER";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "IndexCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "IndexDistributionClaimed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "IndexSubscribed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "IndexUnitsUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "IndexUnsubscribed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "oldIndexValue";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "newIndexValue";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "totalUnitsPending";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "totalUnitsApproved";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "IndexUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "SubscriptionApproved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "SubscriptionDistributionClaimed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "SubscriptionRevoked";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "SubscriptionUnitsUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "agreementType";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "approveSubscription";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "calculateDistribution";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "actualAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint128";
            readonly name: "newIndexValue";
            readonly type: "uint128";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "claim";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "createIndex";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "deleteSubscription";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "distribute";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }];
        readonly name: "getIndex";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "exist";
            readonly type: "bool";
        }, {
            readonly internalType: "uint128";
            readonly name: "indexValue";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "totalUnitsApproved";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "totalUnitsPending";
            readonly type: "uint128";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }];
        readonly name: "getSubscription";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "exist";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }, {
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint256";
            readonly name: "pendingDistribution";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "agreementId";
            readonly type: "bytes32";
        }];
        readonly name: "getSubscriptionByID";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }, {
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint256";
            readonly name: "pendingDistribution";
            readonly type: "uint256";
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
            readonly name: "subscriber";
            readonly type: "address";
        }];
        readonly name: "listSubscriptions";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "publishers";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint32[]";
            readonly name: "indexIds";
            readonly type: "uint32[]";
        }, {
            readonly internalType: "uint128[]";
            readonly name: "unitsList";
            readonly type: "uint128[]";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "revokeSubscription";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint128";
            readonly name: "indexValue";
            readonly type: "uint128";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "updateIndex";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "updateSubscription";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IInstantDistributionAgreementV1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IInstantDistributionAgreementV1;
}
//# sourceMappingURL=IInstantDistributionAgreementV1__factory.d.ts.map