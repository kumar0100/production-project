import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/counter/model/slice/counterSlice";

export const createReduxSore = (initialState?: StateSchema) => configureStore<StateSchema>({
    reducer: {
        counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
