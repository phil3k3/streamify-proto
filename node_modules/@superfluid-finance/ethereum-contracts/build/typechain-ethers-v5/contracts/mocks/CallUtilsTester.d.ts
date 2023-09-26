import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface CallUtilsTesterInterface extends utils.Interface {
    functions: {
        "testIsValidAbiEncodedBytes()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "testIsValidAbiEncodedBytes"): FunctionFragment;
    encodeFunctionData(functionFragment: "testIsValidAbiEncodedBytes", values?: undefined): string;
    decodeFunctionResult(functionFragment: "testIsValidAbiEncodedBytes", data: BytesLike): Result;
    events: {};
}
export interface CallUtilsTester extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CallUtilsTesterInterface;
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
        testIsValidAbiEncodedBytes(overrides?: CallOverrides): Promise<[void]>;
    };
    testIsValidAbiEncodedBytes(overrides?: CallOverrides): Promise<void>;
    callStatic: {
        testIsValidAbiEncodedBytes(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        testIsValidAbiEncodedBytes(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        testIsValidAbiEncodedBytes(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=CallUtilsTester.d.ts.map