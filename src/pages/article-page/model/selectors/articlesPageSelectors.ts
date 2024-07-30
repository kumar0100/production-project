import { StateSchema } from 'app/providers/store-provider';
import { ArticleView } from 'entities/article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlePage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlePage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlePage?.view || ArticleView.SMALL;
