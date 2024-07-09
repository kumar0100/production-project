import { classNames } from "shared/lib/class-name/classNames";
import React, {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: string;
    autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        autoFocus,
        ...otherProps
    } = props;
    const [isFocus, setFocus] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    const onFocus = () => {
        setFocus(true);
    };
    const onBlur = () => {
        setFocus(false);
    };
    const onChengeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };
    useEffect(() => {
        if (autoFocus) {
            setFocus(true);
            ref.current?.focus();
        }
    }, [autoFocus]);
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder} >`}</div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    className={cls.input}
                    type={type}
                    onChange={onChengeHandler}
                    value={value}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocus && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 8.5}px` }}
                    />
                )}
            </div>
        </div>
    );
});
