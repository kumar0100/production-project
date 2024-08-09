import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store-provider";
import { Article, ArticleView } from "entities/article";
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { ArticlePageSchema } from "../types/articlePageSchema";
import { fetchArticleList } from "../services/fetch-article-list/fetchArticleList";

const articleAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticle = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articleAdapter.getInitialState()
);
const articlePageSlice = createSlice({
    name: "articlePageSlice",
    initialState: articleAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: "",
        view: ArticleView.SMALL,
        ids: [],
        entities: {},
        page: 1,
        hasMore: true,
        _inited: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        initSate: (state) => {
            const view = localStorage.getItem(
                ARTICLE_VIEW_LOCALSTORAGE_KEY
            ) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchArticleList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticleList.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    articleAdapter.addMany(state, action.payload);
                    state.hasMore = action.payload.length > 0;
                }
            )
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlePageActions } = articlePageSlice;
export const { reducer: articlePageReducer } = articlePageSlice;
