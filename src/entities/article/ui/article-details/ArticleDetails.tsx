import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "entities/article/model/slice/articleDetailsSlice";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import { fetchArticleById } from "entities/article/model/services/fetch-article-by-id/fetchArticleById";
import { useSelector } from "react-redux";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "entities/article/model/selectors/articleDetails";
import {
    Text, TextAlign, TextSize, TextTheme,
} from "shared/ui/text/Text";
import { Skeleton } from "shared/ui/skeleton/Skeleton";
import { Avatar } from "shared/ui/avatar/Avatar";
import EyeIcon from "shared/assets/icons/eye-20-20.svg";
import Calendar from "shared/assets/icons/calendar-20-20.svg";
import { Icon } from "shared/ui/icon/Icon";
import {
    ArticleBlock,
    ArticleBlockType,
} from "entities/article/model/types/article";
import cls from "./ArticleDetails.module.scss";
import { ArticleImageBlockComp } from "../article-image-block-comp/ArticleImageBlockComp";
import { ArticleTextBlockComp } from "../article-text-block-comp/ArticleTextBlockComp";
import { ArticleCodeBlockComp } from "../article-code-block-comp copy/ArticleCodeBlockComp";

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDtails: articleDetailsReducer,
};
export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation("article");
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const isLoading = useSelector(getArticleDetailsIsLoading);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComp className={cls.block} key={block.id} block={block} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComp className={cls.block} key={block.id} block={block} />;
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComp className={cls.block} key={block.id} block={block} />;
        default:
            return null;
        }
    }, []);
    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);
    let content;
    if (isLoading) {
        content = (
            <div>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t("Someting gone wrong!")}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={Calendar} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
};
