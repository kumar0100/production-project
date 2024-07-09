import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/button/Button";
import { Input } from "shared/ui/input/Input";
import { useSelector } from "react-redux";
import {
    loginActions,
    loginReducer,
} from "features/auth-by-username/model/slice/loginSlice";
import React, { useCallback } from "react";
import { Text, TextTheme } from "shared/ui/text/Text";
import { getLoginError } from "features/auth-by-username/model/selectors/get-login-error/getLoginError";
import { getLoginPassword } from "features/auth-by-username/model/selectors/get-login-password/getLoginPasswors";
import { getLoginIsLoading } from "features/auth-by-username/model/selectors/get-login-isLoading/getLoginIsLoading";
import { getLoginUsername } from "features/auth-by-username/model/selectors/get-login-username/getLoginUsername";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/components/dynamic-module-loader/DynamicModuleLoader";
// eslint-disable-next-line max-len
import { useAppDispatch } from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import { loginByUsername } from "../../services/login-by-username/loginByUsername";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
    className?: string;
    onSucsess?: () => void;
}
const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = ({ className, onSucsess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername) || "";
    const password = useSelector(getLoginPassword) || "";
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );
    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        // eslint-disable-next-line no-constant-condition, no-cond-assign
        if (result.meta.requestStatus = "fulfilled") {
            onSucsess?.();
        }
    }, [dispatch, username, password]);
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t("Auth form")} />
                {error && (
                    <Text
                        text={t("There is wrong username or password")}
                        theme={TextTheme.ERROR}
                    />
                )}
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
        </DynamicModuleLoader>
    );
};

export default LoginForm;
