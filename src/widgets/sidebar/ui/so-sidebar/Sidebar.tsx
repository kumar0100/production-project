import React, { useState } from "react";
import { classNames } from "shared/lib/class-name/classNames";
import { ThemeSwitcher } from "shared/ui/theme-switcher";
import { LangSwitcher } from "shared/ui/language-switcher/LangSwitcher";
import { Button, ButtonSize, ThemeButton } from "shared/ui/button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/app-link/AppLink";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";

import { RoutePath } from "shared/config/route-config/routeConfig";
import { useTranslation } from "react-i18next";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [colapsed, setColapsed] = useState(false);
    const onToggle = () => {
        setColapsed((prev) => !prev);
    };
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
            <div className={cls.items}>
                <AppLink
                    to={RoutePath.main}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t("main")}</span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    className={cls.item}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t("aboutPage")}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={colapsed} />
            </div>
        </div>
    );
};
