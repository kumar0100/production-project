import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store-provider";
import { Comment } from "entities/comment";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";
import { fetchCommentArticleId } from "../services/fetch-comment-article-id/fetchCommentArticleId";

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
);

const articleCommentsSlice = createSlice({
    name: "articleCommentsSlice",
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
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
            .addCase(fetchCommentArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentArticleId.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentArticleId.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleCommentsSlice;

//   type RootState = ReturnType<typeof store.getState>

//   console.log(store.getState().books)
//   // { ids: [], entities: {} }

//   // Can create a set of memoized selectors based on the location of this entity state
//   const booksSelectors = booksAdapter.getSelectors<RootState>(
//     (state) => state.books
//   )

//   // And then use the selectors to retrieve values
//   const allBooks = booksSelectors.selectAll(store.getState())
