import {
    CombinedState,
    Reducer,
    ReducersMapObject,
    configureStore,
} from "@reduxjs/toolkit";
import { counterReducer } from "entities/counter/model/slice/counterSlice";
import { userReducer } from "entities/user";
import { $api } from "shared/api/api";
import { uiReducer } from "features/UI";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { createReducerManager } from "./reducerManager";

export const createReduxSore = (
    initialState?: StateSchema,
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        ui: uiReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            // eslint-disable-next-line implicit-arrow-linebreak
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxSore>["dispatch"];
