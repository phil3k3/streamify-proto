import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { SuperTokenFactoryBase, SuperTokenFactoryBaseInterface } from "../../../../contracts/superfluid/SuperTokenFactory.sol/SuperTokenFactoryBase";
export declare class SuperTokenFactoryBase__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_ALREADY_EXISTS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_DOES_NOT_EXIST";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_NON_UPGRADEABLE_IS_DEPRECATED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_ONLY_GOVERNANCE_OWNER";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_ONLY_HOST";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_UNINITIALIZED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_ZERO_ADDRESS";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "uuid";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "codeAddress";
            readonly type: "address";
        }];
        readonly name: "CodeUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "CustomSuperTokenCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "SuperTokenCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperToken";
            readonly name: "tokenLogic";
            readonly type: "address";
        }];
        readonly name: "SuperTokenLogicCreated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "CONSTANT_INFLOW_NFT_LOGIC";
        readonly outputs: readonly [{
            readonly internalType: "contract IConstantInflowNFT";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CONSTANT_OUTFLOW_NFT_LOGIC";
        readonly outputs: readonly [{
            readonly internalType: "contract IConstantOutflowNFT";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "_SUPER_TOKEN_LOGIC";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "castrate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_underlyingToken";
            readonly type: "address";
        }];
        readonly name: "computeCanonicalERC20WrapperAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "superTokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "isDeployed";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ERC20WithTokenInfo";
            readonly name: "_underlyingToken";
            readonly type: "address";
        }];
        readonly name: "createCanonicalERC20Wrapper";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ERC20WithTokenInfo";
            readonly name: "underlyingToken";
            readonly type: "address";
        }, {
            readonly internalType: "enum ISuperTokenFactory.Upgradability";
            readonly name: "upgradability";
            readonly type: "uint8";
        }, {
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "createERC20Wrapper";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "underlyingToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "underlyingDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "enum ISuperTokenFactory.Upgradability";
            readonly name: "upgradability";
            readonly type: "uint8";
        }, {
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "createERC20Wrapper";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_underlyingTokenAddress";
            readonly type: "address";
        }];
        readonly name: "getCanonicalERC20Wrapper";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "superTokenAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCodeAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "codeAddress";
            readonly type: "address";
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
        readonly inputs: readonly [];
        readonly name: "getSuperTokenLogic";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "underlyingToken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "superToken";
                readonly type: "address";
            }];
            readonly internalType: "struct SuperTokenFactoryBase.InitializeData[]";
            readonly name: "_data";
            readonly type: "tuple[]";
        }];
        readonly name: "initializeCanonicalWrapperSuperTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "customSuperTokenProxy";
            readonly type: "address";
        }];
        readonly name: "initializeCustomSuperToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }];
        readonly name: "updateCode";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SuperTokenFactoryBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperTokenFactoryBase;
}
//# sourceMappingURL=SuperTokenFactoryBase__factory.d.ts.map