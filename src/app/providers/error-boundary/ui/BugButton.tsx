import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-name/classNames';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrow = () => {
        setError(true);
    };
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <button onClick={onThrow} className={classNames('', {}, [])}>
            {t("throw error")}
        </button>
    );
};
