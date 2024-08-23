import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { HTMLAttributeAnchorTarget, memo } from "react";
import {
    Article,
    ArticleBlockType,
    ArticleView,
    ArticlTextBlock,
} from "entities/article/model/types/article";
import Eyecon from "shared/assets/icons/eye-20-20.svg";
import { Text } from "shared/ui/text/Text";
import { Icon } from "shared/ui/icon/Icon";
import { Card } from "shared/ui/card/Card";
import { Avatar } from "shared/ui/avatar/Avatar";
import { Button, ThemeButton } from "shared/ui/button/Button";
import { RoutePath } from "shared/config/route-config/routeConfig";
import { AppLink } from "shared/ui/app-link/AppLink";
import cls from "./ArticleListItem.module.scss";
import { ArticleTextBlockComp } from "../article-text-block-comp/ArticleTextBlockComp";

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation();
    const {
        className, article, view, target,
    } = props;
    const types = <Text text={article.type.join(", ")} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={Eyecon} />
        </>
    );
    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticlTextBlock;
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} alt="img" className={cls.img} />
                    {textBlock && (
                        <ArticleTextBlockComp
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink target={target} to={RoutePath.articles_details + article.id}>
                            <Button
                                theme={ThemeButton.OUTLINE}
                            >
                                {t("read more")}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <AppLink
            to={RoutePath.articles_details + article.id}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt="img" />
                    <Text text={article.createdAt} className={cls.date} />
                    {types}
                </div>
                <div className={cls.infoWrapper}>{views}</div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
