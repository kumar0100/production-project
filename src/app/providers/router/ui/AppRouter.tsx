import { getUserAuthData } from 'entities/user/model/selectors/get-auth-data/getAuthData';
import React, { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/route-config/routeConfig';
import { PageLoader } from 'widgets/page-loader/PageLoader';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData)
    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false
        }
        return true
    }), [isAuth])
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    )
};

export default memo(AppRouter);
