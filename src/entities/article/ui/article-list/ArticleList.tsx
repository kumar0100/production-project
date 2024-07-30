import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { memo, ReactNode } from "react";
import { Article, ArticleView } from "entities/article/model/types/article";
import cls from "./ArticleList.module.scss";
import { ArticleListItem } from "../article-list-item/ArticleListItem";
import { ArticleListItemSkeleton } from "../article-list-item/ArticleListItemSkeleton";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeleton = (view: ArticleView): ReactNode => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => (
        <ArticleListItemSkeleton
            className={cls.card}
            key={index}
            view={view}
        />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation();
    const { className, articles, isLoading, view = ArticleView.SMALL } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                {getSkeleton(view)}
            </div>
        );
    }
    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            key={article.id}
            view={view}
            className={cls.card}
        />
    );
    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    );
});
