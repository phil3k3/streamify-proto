import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface SuperfluidLoaderLibraryInterface extends utils.Interface {
    functions: {
        "getHost()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getHost"): FunctionFragment;
    encodeFunctionData(functionFragment: "getHost", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getHost", data: BytesLike): Result;
    events: {};
}
export interface SuperfluidLoaderLibrary extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SuperfluidLoaderLibraryInterface;
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
        getHost(overrides?: CallOverrides): Promise<[string]>;
    };
    getHost(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getHost(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getHost(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getHost(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SuperfluidLoaderLibrary.d.ts.map