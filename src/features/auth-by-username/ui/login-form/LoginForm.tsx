import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/button/Button";
import { Input } from "shared/ui/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "features/auth-by-username/model/slice/loginSlice";
import { useCallback } from "react";
import { getLoginState } from "features/auth-by-username/model/selectors/selectLoginState";
import { loginByUsername } from "features/auth-by-username/services/login-by-username/loginByUserName";
import { Text, TextTheme } from "shared/ui/text/Text";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);
    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );
    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t("Auth form")} />
            {error && <Text text={t('There is wrong username or password')} theme={TextTheme.ERROR} />}
            <Input
                onChange={onChangeUsername}
                type="text"
                value={username}
                placeholder="Username"
                className={cls.input}
                autoFocus
            />
            <Input
                type="text"
                placeholder="Password"
                value={password}
                className={cls.input}
                autoFocus
                onChange={onChangePassword}
            />
            <Button
                className={cls.loginBtn}
                disabled={isLoading}
                onClick={onLoginClick}
                theme={ThemeButton.OUTLINE}
            >
                {t("log in")}
            </Button>
        </div>
    );
};
