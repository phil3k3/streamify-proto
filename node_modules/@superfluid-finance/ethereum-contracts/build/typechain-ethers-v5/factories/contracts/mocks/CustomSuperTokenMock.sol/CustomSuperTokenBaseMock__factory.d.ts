import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CustomSuperTokenBaseMock, CustomSuperTokenBaseMockInterface } from "../../../../contracts/mocks/CustomSuperTokenMock.sol/CustomSuperTokenBaseMock";
export declare class CustomSuperTokenBaseMock__factory {
    static readonly abi: readonly [{
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "callSelfApproveFor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "callSelfBurn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "holder";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "callSelfTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getFirstCustomTokenStorageSlot";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "slot";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "initialAddress";
            readonly type: "address";
        }];
        readonly name: "initializeProxy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): CustomSuperTokenBaseMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CustomSuperTokenBaseMock;
}
//# sourceMappingURL=CustomSuperTokenBaseMock__factory.d.ts.map