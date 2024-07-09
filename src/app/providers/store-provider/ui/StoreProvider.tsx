import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createReduxSore } from "../config/store";
import { StateSchema } from "../config/StateSchema";
import { ReducersMapObject } from "@reduxjs/toolkit";

interface StoreProviderProps {
    children?: ReactNode;
    initialState? : DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
    const navigate = useNavigate();
    const store = createReduxSore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>, navigate);
    
    return <Provider store={store}>{children}</Provider>;
};
