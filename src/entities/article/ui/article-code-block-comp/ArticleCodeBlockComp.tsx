import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticlCodeBlock } from "entities/article/model/types/article";
import { Code } from "shared/ui/code/Code";
import cls from "./ArticleCodeBlockComp.module.scss";



interface ArticleCodeBlockCompProps {
    className?: string;
    block: ArticlCodeBlock
}

export const ArticleCodeBlockComp = memo(({
    className,
    block,
}: ArticleCodeBlockCompProps) => {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const { t } = useTranslation("article");
    return (
        <div className={classNames(cls.ArticleCodeBlockComp, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
