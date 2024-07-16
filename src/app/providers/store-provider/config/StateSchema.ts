import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { counterSchema } from "entities/counter/model/type/counterSchema";
import { ProfileSchema } from "entities/profile";
import { UserSchema } from "entities/user";
import { LoginSchema } from "features/auth-by-username";
import { NavigateOptions, To } from "react-router-dom";

export interface StateSchema {
    counter: counterSchema;
    user: UserSchema;

    // Async Reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema

export interface reducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: reducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig <T> {
    extra: ThunkExtraArg,
    rejectValue: T,
    state: StateSchema
}
