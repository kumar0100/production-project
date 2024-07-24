import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { memo, ReactNode, useCallback } from "react";
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import cls from "./Code.module.scss";
import { Button, ThemeButton } from "../button/Button";
import { Icon } from "../icon/Icon";

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
    const { t } = useTranslation();
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text])
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ThemeButton.CLEAR}>
                <Icon Svg={CopyIcon} className={cls.icon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
