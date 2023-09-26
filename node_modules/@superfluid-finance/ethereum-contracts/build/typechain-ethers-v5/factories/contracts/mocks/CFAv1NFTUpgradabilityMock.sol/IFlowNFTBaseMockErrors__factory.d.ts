import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFlowNFTBaseMockErrors, IFlowNFTBaseMockErrorsInterface } from "../../../../contracts/mocks/CFAv1NFTUpgradabilityMock.sol/IFlowNFTBaseMockErrors";
export declare class IFlowNFTBaseMockErrors__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_name";
            readonly type: "string";
        }];
        readonly name: "STORAGE_LOCATION_CHANGED";
        readonly type: "error";
    }];
    static createInterface(): IFlowNFTBaseMockErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFlowNFTBaseMockErrors;
}
//# sourceMappingURL=IFlowNFTBaseMockErrors__factory.d.ts.map