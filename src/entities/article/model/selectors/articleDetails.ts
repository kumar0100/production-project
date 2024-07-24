import { StateSchema } from "app/providers/store-provider";

export const getArticleDetailsData = (state: StateSchema) =>
    state.articleDtails?.data;
export const getArticleDetailsError = (state: StateSchema) =>
    state.articleDtails?.error;
export const getArticleDetailsIsLoading = (state: StateSchema) =>
    state.articleDtails?.isLoading;
