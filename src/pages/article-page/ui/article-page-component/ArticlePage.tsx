import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Article, ArticleList, ArticleView, ArticleViewSelector } from "entities/article";
import cls from "./ArticlePage.module.scss";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlePageActions, articlePageReducer, getArticle } from "pages/article-page/model/slices/articlePageSlice";
import { useAppDispatch } from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/use-initial-effect/useInitialEffect";
import { useSelector } from "react-redux";
import { fetchArticleList } from "pages/article-page/model/services/fetch-article-list/fetchArticleList";
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from "pages/article-page/model/selectors/articlesPageSelectors";

interface ArticlePageProps {
    className?: string;
}

const reducer: ReducersList = {
    articlePage: articlePageReducer
}


const ArticlePage = ({ className }: ArticlePageProps) => {
    const { t } = useTranslation("article");
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageView)
    const articles = useSelector(getArticle.selectAll)
    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view))
    }, [])
    useInitialEffect(() => {
        dispatch(fetchArticleList())
        dispatch(articlePageActions.initSate())
    })
    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(cls.ArticlePage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    view={view}
                    isLoading={isLoading}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
