import { fetchArticleById } from "../services/fetch-article-by-id/fetchArticleById";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { articleDetailsReducer } from "./articleDetailsSlice";
import { Article } from "../types/article";

describe("article-details-slice", () => {
    const data: Article = {
        id: "1",
        title: "title",
        subtitle: "subtitle",
        img: "img",
        views: 100,
        createdAt: "12.12.12",
        user: {
            id: "1",
            username: "snow",
        },
        type: [],
        blocks: [],
    };
    test("loading", () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending
            )
        ).toEqual({
            isLoading: true,
        });
    });

    test("error", () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: undefined,
        };
        expect(
            articleDetailsReducer(state as ArticleDetailsSchema, {
                type: fetchArticleById.rejected.type,
                payload: "error",
            })
        ).toEqual({
            isLoading: false,
            error: "error",
        });
    });

    test("succsess", () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            data,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data, "", " ")
            )
        ).toEqual({
            isLoading: false,
            data,
        });
    });
});
