import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/class-name/classNames";
import { memo } from "react";
import { ArticlImageBlock } from "entities/article/model/types/article";
import { TextAlign, Text } from "shared/ui/text/Text";

import cls from "./ArticleImageBlockComp.module.scss";

interface ArticleImageBlockCompProps {
    className?: string;
    block: ArticlImageBlock
}

export const ArticleImageBlockComp = memo(
    ({ className, block }: ArticleImageBlockCompProps) => {
        const { t } = useTranslation("article");

        return (
            <div
                className={classNames(cls.ArticleImageBlockComp, {}, [
                    className,
                ])}
            >
                <img src={block.src} alt={block.title} className={cls.img} />
                {block.title && (
                    <Text text={block.title} align={TextAlign.CENTER} />
                )}
            </div>
        );
    }
);
