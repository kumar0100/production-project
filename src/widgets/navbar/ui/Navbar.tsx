import React, { memo, useCallback, useState } from "react";
import { classNames } from "shared/lib/class-name/classNames";
import { Button, ThemeButton } from "shared/ui/button/Button";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData } from "entities/user/model/selectors/get-auth-data/getAuthData";
import { userActions } from "entities/user";
import { LoginModal } from "features/auth-by-username";
import { Text, TextTheme } from "shared/ui/text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/app-link/AppLink";
import { RoutePath } from "shared/config/route-config/routeConfig";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const onCloseModal = () => {
        setIsAuthModal(false);
    };
    const onShowModal = () => {
        setIsAuthModal(true);
    };
    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Text title={t('Project')} theme={TextTheme.INVERTED} className={cls.appName} />
                <AppLink to={RoutePath.articles_create} theme={AppLinkTheme.SECONDARY}>
                    {t('Create Article')}
                </AppLink>
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogOut}
                >
                    {t("log out")}
                </Button>
            </div>
        );
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t("log in")}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
});
