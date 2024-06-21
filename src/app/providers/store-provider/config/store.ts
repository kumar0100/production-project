import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/counter/model/slice/counterSlice";
import { userReducer } from "entities/user";
import { loginReducer } from "features/auth-by-username/model/slice/loginSlice";
import { StateSchema } from "./StateSchema";

export const createReduxSore = (initialState?: StateSchema) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};
