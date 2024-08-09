import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/article";
import { counterSchema } from "entities/counter/model/type/counterSchema";
import { ProfileSchema } from "entities/profile";
import { UserSchema } from "entities/user";
import { addCommentFormSchema } from "features/add-comment-form";
import { LoginSchema } from "features/auth-by-username";
import { UISchema } from "features/UI/model/types/UISchema";
import { ArticlePageSchema } from "pages/article-page";
import { ArticleDetailsCommentsSchema } from "pages/article-page-details";

export interface StateSchema {
    counter: counterSchema;
    user: UserSchema;
    ui: UISchema;
    // Async Reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDtails?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
    addCommentForm?: addCommentFormSchema;
    articlePage?: ArticlePageSchema;
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface reducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void,
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: reducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig <T> {
    extra: ThunkExtraArg,
    rejectValue: T,
    state: StateSchema
}
