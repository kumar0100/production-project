import { Mods, classNames } from 'shared/lib/class-name/classNames';
// eslint-disable-next-line import/no-duplicates
import React, { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE_RED = 'outline_red',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean,
    size?: ButtonSize,
    disabled?: boolean,
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className, theme = ThemeButton.OUTLINE, children, square, size = ButtonSize.M, disabled, ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            // eslint-disable-next-line max-len
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
