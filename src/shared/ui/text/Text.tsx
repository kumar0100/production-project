import { classNames } from "shared/lib/class-name/classNames";
import cls from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: string;
}

export const Text = ({
    className, title, text, theme,
}: TextProps) => (
    <div
        className={classNames(cls.Text, { [cls[theme]]: true }, [
            className,
        ])}
    >
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
);
