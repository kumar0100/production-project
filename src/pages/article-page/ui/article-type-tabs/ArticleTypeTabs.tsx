import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import { ArticleType } from "entities/article/model/types/article";
import { Tabs, TabsItem } from "shared/ui/tabs/Tabs";

interface ArticleTypeTabsProps {
    className?: string
    value: ArticleType,
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { t } = useTranslation()
    const { className, value, onChangeType } = props
    const onTabClick = useCallback(
        (tab: TabsItem) => {
            onChangeType(tab.value as ArticleType)
        },
        [onChangeType]
    );
    const typeLabs = useMemo<TabsItem[]>(
        () => [
            {
                value: ArticleType.IT,
                content: t("IT"),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t("Economic"),
            },
            {
                value: ArticleType.SCIENCE,
                content: t("Science"),
            },
            {
                value: ArticleType.ALL,
                content: t("All"),
            },
        ],
        [t],
    );
    return (
        <Tabs tabs={typeLabs} value={value} onTabClick={onTabClick} className={className} />
    )
})