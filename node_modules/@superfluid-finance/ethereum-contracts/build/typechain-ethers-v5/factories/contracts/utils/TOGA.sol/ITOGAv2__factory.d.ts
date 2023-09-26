import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITOGAv2, ITOGAv2Interface } from "../../../../contracts/utils/TOGA.sol/ITOGAv2";
export declare class ITOGAv2__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "additionalBond";
            readonly type: "uint256";
        }];
        readonly name: "BondIncreased";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "int96";
            readonly name: "exitRate";
            readonly type: "int96";
        }];
        readonly name: "ExitRateChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "pic";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bond";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int96";
            readonly name: "exitRate";
            readonly type: "int96";
        }];
        readonly name: "NewPIC";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "newExitRate";
            readonly type: "int96";
        }];
        readonly name: "changeExitRate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "getCurrentPIC";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "pic";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "getCurrentPICInfo";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "pic";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "bond";
            readonly type: "uint256";
        }, {
            readonly internalType: "int96";
            readonly name: "exitRate";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "getDefaultExitRateFor";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "exitRate";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "getMaxExitRateFor";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "exitRate";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "withdrawFundsInCustody";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ITOGAv2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITOGAv2;
}
//# sourceMappingURL=ITOGAv2__factory.d.ts.map