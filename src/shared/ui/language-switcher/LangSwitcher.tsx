import React from 'react';
import { classNames } from 'shared/lib/class-name/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';
import { Button, ThemeButton } from '../button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };
    return (
        <Button
            onClick={toggle}
            theme={ThemeButton.CLEAR}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {short ? t('short') : t('language')}
        </Button>
    );
};
