import React from "react";
import { RoutePath } from "shared/config/route-config/routeConfig";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg";
import ArticleIcon from "shared/assets/icons/article-20-20.svg";

export interface SidebarItemType {
    path: string;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        icon: MainIcon,
        text: "Main",
    },
    {
        path: RoutePath.about,
        icon: AboutIcon,
        text: "About",
    },
    {
        path: RoutePath.profile,
        icon: ProfileIcon,
        text: "Profile",
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        icon: ArticleIcon,
        text: "Articles",
        authOnly: true,
    },
];
