import { classNames } from "shared/lib/class-name/classNames";
import { SidebarItemType } from "widgets/sidebar/model/item";
import { AppLink, AppLinkTheme } from "shared/ui/app-link/AppLink";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
    item: SidebarItemType;
    colapsed: boolean;
}

export const SidebarItem = memo(({ item, colapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <AppLink
            to={item.path}
            className={classNames(cls.item, { [cls.colapsed]: colapsed }, [])}
            theme={AppLinkTheme.SECONDARY}
        >
            <item.icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
