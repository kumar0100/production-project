import React from "react";
import { AboutPage } from "pages/about-page";
import { MainPage } from "pages/main-page";
import { NotFoundPage } from "pages/not-found-page";
import { RouteProps } from "react-router-dom";
import { ProfilePage } from "pages/profile-page";
import { ArticlePage } from "pages/article-page";
import { ArticlePageDetails } from 'pages/article-page-details';
import { ArticleEditPage } from "pages/article-edit-page";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    ARTICLES = "articles",
    ARTICLES_DETAILS = "articles_details",
    ARTICLE_CREATE = "articles_create",
    ARTICLES_EDIT = "articles_edit",
    NOT_FOUND_PAGE = "not_found",
}

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile/",
    [AppRoutes.ARTICLES]: "/articles",
    [AppRoutes.ARTICLES_EDIT]: "/articles/:id/edit",
    [AppRoutes.ARTICLE_CREATE]: "/articles/new",
    [AppRoutes.ARTICLES_DETAILS]: "/articles/",
    [AppRoutes.NOT_FOUND_PAGE]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND_PAGE]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_EDIT]: {
        path: RoutePath.articles_edit,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: RoutePath.articles_create,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: `${RoutePath.articles_details}:id`,
        element: <ArticlePageDetails />,
        authOnly: true,
    },
};
