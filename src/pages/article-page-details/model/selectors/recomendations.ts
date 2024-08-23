import { StateSchema } from "app/providers/store-provider";

export const getArticleRecomendationsIsloading = (state: StateSchema) => state.articleDetailsPage?.recomendations?.isLoading;
export const getArticleRecomendationsError = (state: StateSchema) => state.articleDetailsPage?.recomendations?.error;
