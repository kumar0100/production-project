import { ReactNode } from "react";
import { Provider } from "react-redux";
import { DeepPartial } from "@reduxjs/toolkit";
import { createReduxSore } from "../config/store";
import { StateSchema } from "../config/StateSchema";

interface StoreProviderProps {
    children?: ReactNode;
    initialState? : DeepPartial<StateSchema>
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const store = createReduxSore(initialState as StateSchema);
    return <Provider store={store}>{children}</Provider>;
};
