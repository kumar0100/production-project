import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store-provider";
import { Comment } from 'entities/comment';
import { getArticleDetailsData } from "entities/article/model/selectors/articleDetails";
import { fetchArticleById } from "entities/article/model/services/fetch-article-by-id/fetchArticleById";
import { getUserAuthData } from "entities/user";
import { fetchCommentArticleId } from "../fetch-comment-article-id/fetchCommentArticleId";

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>("articleDetails/addCommentForArticle", async (text, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;
    const article = getArticleDetailsData(getState());
    const userData = getUserAuthData(getState());
    if (!text || !article || !userData) {
        return rejectWithValue("error");
    }

    try {
        const response = await extra.api.post<Comment>("/comments", {
            articleId: article.id,
            userId: userData.id,
            text,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentArticleId(article.id));

        return response.data;
    } catch (e) {
        return rejectWithValue("error");
    }
});
