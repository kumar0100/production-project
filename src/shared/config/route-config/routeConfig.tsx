import React from 'react';
import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import { NotFoundPage } from 'pages/not-found-page';
import { RouteProps } from 'react-router-dom';
import { ProfilePage } from 'pages/profile-page';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND_PAGE = 'not_found',
}

type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND_PAGE]: '*',
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
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND_PAGE]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
