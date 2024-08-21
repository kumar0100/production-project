import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
import { ArticleView, ArticleViewSelector } from "entities/article";
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from "pages/article-page/model/selectors/articlesPageSelectors";
import { articlePageActions } from "pages/article-page/model/slices/articlePageSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import { Card } from "shared/ui/card/Card";
import { Input } from "shared/ui/input/Input";
import { ArticleSortSelect } from "entities/article/ui/article-sort-select/ArticleSortSelect";
import {
    ArticleSortField,
    ArticleType,
} from "entities/article/model/types/article";
import { SortOrder } from "shared/types";
import { fetchArticleList } from "pages/article-page/model/services/fetch-article-list/fetchArticleList";
import { useDebounce } from "shared/lib/hooks/use-debounce/useDebounce";
import cls from "./ArticlePageFilters.module.scss";
import { ArticleTypeTabs } from "../article-type-tabs/ArticleTypeTabs";

interface ArticlePageFiltersProps {
    className?: string;
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);
    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view));
        },
        [dispatch]
    );
    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlePageActions.setSort(newSort));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );
    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlePageActions.setOrder(newOrder));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );
    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlePageActions.setSearch(search));
            dispatch(articlePageActions.setPage(1));
            debounceFetchData();
        },
        [dispatch, debounceFetchData]
    );
    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlePageActions.setType(value));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );
    return (
        <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelect
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t("Search")}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypeTabs className={cls.tabs} onChangeType={onChangeType} value={type} />
        </div>
    );
});
