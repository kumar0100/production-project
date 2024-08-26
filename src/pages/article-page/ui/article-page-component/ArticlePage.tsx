import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import {
    ArticleList,
} from "entities/article";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    articlePageReducer,
    getArticle,
} from "pages/article-page/model/slices/articlePageSlice";
import { useAppDispatch } from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/use-initial-effect/useInitialEffect";
import { useSelector } from "react-redux";
import {
    getArticlesPageError,
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageView,
} from "pages/article-page/model/selectors/articlesPageSelectors";
import { Page } from "shared/ui/page/Page";
import { fetchNextArticlesPage } from "pages/article-page/model/services/fetch-article-next-page/fetchArticleNextPage";
import { initArticlePage } from "pages/article-page/model/services/init-article-page/initArticlePage";
import { useSearchParams } from "react-router-dom";
import cls from "./ArticlePage.module.scss";
import { ArticlePageFilters } from "../article-page-filter/ArticlePageFilters";

interface ArticlePageProps {
    className?: string;
}

const reducer: ReducersList = {
    articlePage: articlePageReducer,
};

const ArticlePage = ({ className }: ArticlePageProps) => {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const { t } = useTranslation("article");
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlesPageIsLoading);
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const page = useSelector(getArticlesPageNum);
    // eslint-disable-next-line prefer-const
    let [searchParams] = useSearchParams();
    const hasMore = useSelector(getArticlesPageHasMore);
    const articles = useSelector(getArticle.selectAll);
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch, hasMore, isLoading, page]);
    useInitialEffect(() => dispatch(initArticlePage(searchParams)));
    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <ArticlePageFilters />
                <ArticleList
                    className={cls.list}
                    view={view}
                    isLoading={isLoading}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
