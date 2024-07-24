import { TestAsyncThunk } from "shared/lib/tests/test-async-funk/TestAsyncFunk";
import { fetchArticleById } from "./fetchArticleById";
import { Article } from "../../types/article";

describe("fetchProfileData.test", () => {
    test("success login", async () => {
        const data: Article = {
            id: "1",
            title: "title",
            subtitle: "subtitle",
            img: "img",
            views: 100,
            createdAt: "12.12.12",
            type: [],
            blocks: [],
        };
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockResolvedValue(Promise.resolve({ data }));
        const result = await thunk.callThunk("1");

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data);
    });

    test("error login", async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk("");

        expect(result.meta.requestStatus).toBe("rejected");
    });
});
