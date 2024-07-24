import { getUserAuthData } from "entities/user/model/selectors/get-auth-data/getAuthData";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/route-config/routeConfig";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    let auth = useSelector(getUserAuthData);
    let location = useLocation();

    if (!auth) {
        return (
            <Navigate to={RoutePath.main} state={{ from: location }} replace />
        );
    }

    return children;
};
