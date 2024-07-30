import React, { memo, useMemo, useState } from "react";
import { classNames } from "shared/lib/class-name/classNames";
import { ThemeSwitcher } from "shared/ui/theme-switcher";
import { LangSwitcher } from "shared/ui/language-switcher/LangSwitcher";
import { Button, ButtonSize, ThemeButton } from "shared/ui/button/Button";
import { useSelector } from "react-redux";
import { getSidebarItems } from "widgets/sidebar/model/selectors/getSidebarItems";
import { SidebarItem } from "../sidbar-item/SidebarItem";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [colapsed, setColapsed] = useState(false);
    const SidebarItemsList = useSelector(getSidebarItems)
    const onToggle = () => {
        setColapsed((prev) => !prev);
    };
    const itemList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem item={item} colapsed={colapsed} key={item.path} />
    )), [colapsed, SidebarItemsList]);
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.colapsed]: colapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                theme={ThemeButton.BACKGROUND_INVERTED}
                className={cls.colapseBtn}
                onClick={onToggle}
                square
                size={ButtonSize.L}
            >
                {colapsed ? ">" : "<"}
            </Button>
            <div className={cls.items}>{itemList}</div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={colapsed} />
            </div>
        </div>
    );
});
