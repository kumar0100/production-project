import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store-provider";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { articlePageActions } from "../../slices/articlePageSlice";
import { fetchArticleList } from "../fetch-article-list/fetchArticleList";


export const initArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>("articlesPage/fetchNextArticlesPage", async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState());
    if (!inited) {
        dispatch(articlePageActions.initSate());
        dispatch(
            fetchArticleList({
                page: 1,
            }),
        );
    }
});
