import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface SuperfluidDestructorMockInterface extends utils.Interface {
    functions: {
        "NON_UPGRADABLE_DEPLOYMENT()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "NON_UPGRADABLE_DEPLOYMENT"): FunctionFragment;
    encodeFunctionData(functionFragment: "NON_UPGRADABLE_DEPLOYMENT", values?: undefined): string;
    decodeFunctionResult(functionFragment: "NON_UPGRADABLE_DEPLOYMENT", data: BytesLike): Result;
    events: {};
}
export interface SuperfluidDestructorMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SuperfluidDestructorMockInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        NON_UPGRADABLE_DEPLOYMENT(overrides?: CallOverrides): Promise<[boolean]>;
    };
    NON_UPGRADABLE_DEPLOYMENT(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        NON_UPGRADABLE_DEPLOYMENT(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        NON_UPGRADABLE_DEPLOYMENT(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        NON_UPGRADABLE_DEPLOYMENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SuperfluidDestructorMock.d.ts.map