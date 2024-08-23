import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { HTMLAttributeAnchorTarget, memo, ReactNode } from "react";
import { Article, ArticleView } from "entities/article/model/types/article";
import { Text } from "shared/ui/text/Text";
import cls from "./ArticleList.module.scss";
import { ArticleListItem } from "../article-list-item/ArticleListItem";
import { ArticleListItemSkeleton } from "../article-list-item/ArticleListItemSkeleton";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget
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
    const {
        className, articles, isLoading, view = ArticleView.SMALL, target
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem
            target={target}
            article={article}
            key={article.id}
            view={view}
            className={cls.card}
        />
    );
    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text title={t('Article is not found')} />
            </div>
        );
    }
    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeleton(view)}
        </div>
    );
});
