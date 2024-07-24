import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Comment } from "entities/comment/model/types/comment";
import { Avatar } from "shared/ui/avatar/Avatar";
import { Text } from "shared/ui/text/Text";
import { Skeleton } from "shared/ui/skeleton/Skeleton";
import { AppLink } from "shared/ui/app-link/AppLink";
import { RoutePath } from "shared/config/route-config/routeConfig";
import cls from "./CommentCard.module.scss";

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { t } = useTranslation();
    const { className, comment, isLoading } = props;
    if (isLoading) {
        return (
            <div
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton
                        width={100}
                        height={16}
                        className={cls.username}
                    />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        );
    }
    if (!comment) {
        return null;
    }
    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink
                to={`${RoutePath.profile}${comment.user.id}`}
                className={cls.header}
            >
                <Avatar src={comment.user.avatar} size={30} />
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
});
