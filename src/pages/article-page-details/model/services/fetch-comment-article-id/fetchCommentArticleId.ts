import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store-provider";
import { Comment } from "entities/comment";

export const fetchCommentArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>("articleDetailsPage/fetchCommentArticleId", async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!articleId) {
        return rejectWithValue('error');
    }

    try {
        const response = await extra.api.get<Comment[]>(`/comments`, {
            params: {
                articleId,
                _expand: 'user',
            },
        });
        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
