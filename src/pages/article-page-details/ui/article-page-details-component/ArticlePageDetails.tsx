import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleDetails } from "entities/article";
import { useNavigate, useParams } from "react-router-dom";
import { Text } from "shared/ui/text/Text";
import { CommentLIst } from "entities/comment";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from "pages/article-page-details/model/slices/articleDetailsCommentsSlice";
import { useSelector } from "react-redux";
import { getArticleCommentsIsloading } from "pages/article-page-details/model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/use-initial-effect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import { fetchCommentArticleId } from "pages/article-page-details/model/services/fetch-comment-article-id/fetchCommentArticleId";
import { AddCommentForm } from "features/add-comment-form";
import { addCommentForArticle } from "pages/article-page-details/model/services/add-comment-for-article/addCommentForArticle";
import cls from "./ArticlePageDeatils.module.scss";
import { Button, ThemeButton } from "shared/ui/button/Button";
import { RoutePath } from "shared/config/route-config/routeConfig";
import { Page } from "shared/ui/page/Page";

interface ArticlePageDeatilsProps {
    className?: string;
}

const reducer: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticlePageDeatils = ({ className }: ArticlePageDeatilsProps) => {
    const { t } = useTranslation("article");
    const { id } = useParams<{ id: string }>();
    const comment = useSelector(getArticleComments.selectAll);
    const commentIsloading = useSelector(getArticleCommentsIsloading);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onBackBtn = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);
    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );
    useInitialEffect(() => {
        dispatch(fetchCommentArticleId(id));
    });
    if (!id) {
        return (
            <div
                className={classNames(cls.ArticlePageDeatils, {}, [className])}
            >
                {t("Article is not found")}
            </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducer}>
            <Page
                className={classNames(cls.ArticlePageDeatils, {}, [className])}
            >
                <Button theme={ThemeButton.OUTLINE} onClick={onBackBtn}>
                    {t("Back to list")}
                </Button>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t("Comments")} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentLIst isLoading={commentIsloading} comments={comment} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePageDeatils);
