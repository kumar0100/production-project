import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Comment } from "entities/comment/model/types/comment";
import { Text } from "shared/ui/text/Text";
import cls from './CommentLIst.module.scss';
import { CommentCard } from "../comment-card/CommentCard";

interface CommentLIstProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentLIst = memo((props: CommentLIstProps) => {
    const { t } = useTranslation();
    const { className, comments, isLoading } = props;
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }
    return (
        <div className={classNames(cls.CommentLIst, {}, [className])}>
            {comments?.length ? comments.map((comment) => (
                <CommentCard key={comment.id} isLoading={isLoading} className={cls.comment} comment={comment} />
            )) : <Text text={t('No comments')} />}
        </div>
    );
});
