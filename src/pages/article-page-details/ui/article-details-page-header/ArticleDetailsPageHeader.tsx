import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/route-config/routeConfig";
import { Button, ThemeButton } from "shared/ui/button/Button";
import { getCanEditArticle } from "pages/article-page-details/model/selectors/article";
import { useSelector } from "react-redux";
import cls from "./ArticleDetailsPageHeader.module.scss";

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { t } = useTranslation();
        const { className } = props;
        const canEdit = useSelector(getCanEditArticle);
        const navigate = useNavigate();
        const onBackBtn = useCallback(() => {
            navigate(RoutePath.articles);
        }, [navigate]);
        const onBackBtnn = useCallback(() => {
            navigate(RoutePath.articles_edit);
        }, [navigate]);
        return (
            <div
                className={classNames(cls.ArticleDetailsPageHeader, {}, [
                    className,
                ])}
            >
                <Button theme={ThemeButton.OUTLINE} onClick={onBackBtn}>
                    {t("Back to list")}
                </Button>
                {canEdit && (
                    <Button theme={ThemeButton.OUTLINE} onClick={onBackBtnn}>
                        {t("Edit")}
                    </Button>
                )}
            </div>
        );
    },
);
