import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { counterSchema } from "entities/counter/model/type/counterSchema";
import { UserSchema } from "entities/user";
import { LoginSchema } from "features/auth-by-username";

export interface StateSchema {
    counter: counterSchema;
    user: UserSchema;
    loginForm?: LoginSchema
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
