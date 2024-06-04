import { classNames } from "shared/lib/class-name/classNames";
import cls from "./PageError.module.scss";
import { t } from "i18next";
import { Button } from "shared/ui/button/Button";

interface PageErrorProps {
    className?: string;
}

const reoladPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
};

export const PageError = ({ className }: PageErrorProps) => {
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h2>{t("An unexpected error occurred")}</h2>
            <Button onClick={reoladPage}>{t("reload page")}</Button>
        </div>
    );
};
