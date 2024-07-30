import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store-provider";
import { Article } from "entities/article";

export const fetchArticleList = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>("articlePage/fetchArticleList", async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
        const response = await extra.api.get<Article[]>("/articles", {
            params: {
                _expand: "user",
            },
        });
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue("error");
    }
});
