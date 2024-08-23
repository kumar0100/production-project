import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store-provider";
import { Article } from "entities/article";
import { ArticleDetailsRecomandationsSchema } from "../types/ArticleDetailsRecomendationsSchema";
import { fetchArticleDetailsRecomendations } from "../services/article-details-recomendations/fetchArticleDetailsRecomendations";

const recomandationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecomandations = recomandationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recomendations
            || recomandationsAdapter.getInitialState(),
);

const articleRecomandationsSlice = createSlice({
    name: "articDetilesleRecomandationsSlice",
    initialState:
        recomandationsAdapter.getInitialState<ArticleDetailsRecomandationsSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleDetailsRecomendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticleDetailsRecomendations.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    recomandationsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchArticleDetailsRecomendations.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { reducer: articleDetailsRecomandationsReducer } = articleRecomandationsSlice;

//   type RootState = ReturnType<typeof store.getState>

//   console.log(store.getState().books)
//   // { ids: [], entities: {} }

//   // Can create a set of memoized selectors based on the location of this entity state
//   const booksSelectors = booksAdapter.getSelectors<RootState>(
//     (state) => state.books
//   )

//   // And then use the selectors to retrieve values
//   const allBooks = booksSelectors.selectAll(store.getState())
