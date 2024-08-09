import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/article";

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;

    hasMore: boolean;
    page: number;
    limit?: number;

    _inited: boolean
}
