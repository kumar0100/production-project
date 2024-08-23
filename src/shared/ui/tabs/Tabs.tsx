import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { memo, ReactNode, useCallback } from "react";
import cls from "./Tabs.module.scss";
import { Card, CardTheme } from "../card/Card";

export interface TabsItem {
    value: string;
    content: ReactNode;
}
interface TabsProps {
    className?: string;
    tabs: TabsItem[];
    value: string;
    onTabClick: (tab: TabsItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const { t } = useTranslation();
    const {
        className, tabs, value, onTabClick,
    } = props;
    const clickHandle = useCallback((tab: TabsItem) => () => onTabClick(tab), [onTabClick]);
    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    onClick={clickHandle(tab)}
                    className={cls.tab}
                    key={tab.value}
                    theme={
                        tab.value === value
                            ? CardTheme.NORMAL
                            : CardTheme.OUTLINED
                    }
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
