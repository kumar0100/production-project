import { t, use } from "i18next";
import { useEffect, useState } from "react";
import { classNames } from "shared/lib/class-name/classNames";

export const BugButton = () => {
    const [error, setError] = useState(false);
    const onThrow = () => {
        setError(true);
    };
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <button onClick={onThrow} className={classNames("", {}, [])}>
            {t("throw error")}
        </button>
    );
};
