import React from "react";
import { classNames } from "shared/lib/class-name/classNames";
import { Link } from "react-router-dom";
import { AppLink, AppLinkTheme } from "shared/ui/app-link/AppLink";
import { ThemeSwitcher } from "shared/ui/theme-switcher";
import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                /
            </div>
        </div>
    );
};
