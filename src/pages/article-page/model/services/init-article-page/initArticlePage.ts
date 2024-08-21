import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store-provider";
import { ArticleSortField, ArticleType } from "entities/article/model/types/article";
import { SortOrder } from "shared/types";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { articlePageActions } from "../../slices/articlePageSlice";
import { fetchArticleList } from "../fetch-article-list/fetchArticleList";


export const initArticlePage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>("articlesPage/fetchNextArticlesPage", async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState());
    if (!inited) {
        const orderFromUrl = searchParams.get("order") as SortOrder;
        const sortFromUrl = searchParams.get("sort") as ArticleSortField;
        const typeFromUrl = searchParams.get("type") as ArticleType;
        const searchFromUrl = searchParams.get("search");
        if (orderFromUrl) {
            dispatch(articlePageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(articlePageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(articlePageActions.setSearch(searchFromUrl));
        }
        if (typeFromUrl) {
            dispatch(articlePageActions.setType(typeFromUrl));
        }
        dispatch(articlePageActions.initSate());
        dispatch(fetchArticleList({}));
    }
});
