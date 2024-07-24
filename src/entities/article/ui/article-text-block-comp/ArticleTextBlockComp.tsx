import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticlTextBlock } from "entities/article/model/types/article";
import { Text } from "shared/ui/text/Text";
import cls from "./ArticleTextBlockComp.module.scss";


interface ArticleTextBlockCompProps {
    className?: string;
    block: ArticlTextBlock
}

export const ArticleTextBlockComp = memo(({
    className,
    block,
}: ArticleTextBlockCompProps) => {
    const { t } = useTranslation("article");
    return (
        <div className={classNames(cls.ArticleTextBlockComp, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((paragraph) => (
                <Text key={paragraph} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
});
