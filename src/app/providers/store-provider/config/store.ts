import {
    Action,
    CombinedState,
    Reducer,
    ReducersMapObject,
    configureStore,
} from "@reduxjs/toolkit";
import { counterReducer } from "entities/counter/model/slice/counterSlice";
import { userReducer } from "entities/user";
import { loginReducer } from "features/auth-by-username";
import { $api } from "shared/api/api";
import { NavigateOptions, To } from "react-router-dom";
import { profileReducer } from "entities/profile";
import { articleDetailsReducer } from "entities/article/model/slice/articleDetailsSlice";
import { articleDetailsCommentsReducer } from "pages/article-page-details/model/slices/articleDetailsCommentsSlice";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { createReducerManager } from "./reducerManager";

export const createReduxSore = (
    initialState?: StateSchema,
    navigate?: (to: To, options?: NavigateOptions) => void,
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        // @ts-ignore
        loginForm: loginReducer,
        // @ts-ignore
        profile: profileReducer,
        // @ts-ignore
        articleDtails: articleDetailsReducer,
        // @ts-ignore
        articleDetailsComments: articleDetailsCommentsReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
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
// eslint-disable-next-line max-len, no-redeclare

