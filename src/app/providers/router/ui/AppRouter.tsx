import React, { Suspense, memo, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import {
    AppRoutesProps,
    routeConfig,
} from "shared/config/route-config/routeConfig";
import { PageLoader } from "widgets/page-loader/PageLoader";
import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => (
        <Route
            key={route.path}
            path={route.path}
            // eslint-disable-next-line max-len, react/jsx-no-useless-fragment
            element={route.authOnly ? <RequireAuth><>{route.element}</></RequireAuth> : <>{route.element}</>}
        />
    ), []);
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
