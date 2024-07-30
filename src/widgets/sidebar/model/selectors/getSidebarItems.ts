import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/user";
import { RoutePath } from "shared/config/route-config/routeConfig";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg";
import ArticleIcon from "shared/assets/icons/article-20-20.svg";
import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (user) => {
    const SidebarItemsList: SidebarItemType[] = [
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
    ];

    if (user) {
        SidebarItemsList.push(
            {
                path: RoutePath.profile + user.id,
                icon: ProfileIcon,
                text: "Profile",
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                icon: ArticleIcon,
                text: "Articles",
                authOnly: true,
            }
        );
    }
    return SidebarItemsList;
});
