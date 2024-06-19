import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/button/Button";
import { Input } from "shared/ui/input/Input";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" placeholder="Username" className={cls.input} autoFocus />
            <Input type="text" placeholder="Password" className={cls.input} autoFocus />
            <Button className={cls.loginBtn}>{t("log in")}</Button>
        </div>
    );
};
