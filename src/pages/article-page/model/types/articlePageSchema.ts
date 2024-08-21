import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/article";
import { ArticleSortField, ArticleType } from "entities/article/model/types/article";
import { SortOrder } from "shared/types";

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;

    hasMore: boolean;
    page: number;
    limit: number;

    type: ArticleType

    order: SortOrder ;
    sort: ArticleSortField;
    search: string;
    _inited: boolean
}
