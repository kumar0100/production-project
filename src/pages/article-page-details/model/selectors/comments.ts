import { StateSchema } from "app/providers/store-provider";

export const getArticleCommentsIsloading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;
