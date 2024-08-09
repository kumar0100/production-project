import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import {
    ArticleList,
    ArticleView,
    ArticleViewSelector,
} from "entities/article";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    articlePageActions,
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
import cls from "./ArticlePage.module.scss";

interface ArticlePageProps {
    className?: string;
}

const reducer: ReducersList = {
    articlePage: articlePageReducer,
};

const ArticlePage = ({ className }: ArticlePageProps) => {
    const { t } = useTranslation("article");
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const page = useSelector(getArticlesPageNum);

    const hasMore = useSelector(getArticlesPageHasMore);
    const articles = useSelector(getArticle.selectAll);
    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, []);
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch, hasMore, isLoading, page]);
    useInitialEffect(() => {});
    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    view={view}
                    isLoading={isLoading}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
