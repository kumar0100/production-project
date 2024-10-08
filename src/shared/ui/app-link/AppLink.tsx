import React, { ReactNode, memo } from 'react';

import { classNames } from 'shared/lib/class-name/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme,
    children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to, className, children, theme = AppLinkTheme.PRIMARY,
    } = props;
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
});
