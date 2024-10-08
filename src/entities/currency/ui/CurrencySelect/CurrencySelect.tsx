import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/select/Select";
import { memo, useCallback } from "react";
import { Currency } from "../../model/types/currency";

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
    me?: string;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
    ({ className, value, onChange, readonly, me }: CurrencySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange]
        );

        return (
            <Select
                className={classNames("", {}, [className])}
                label={t("Укажите валюту")}
                options={options}
                value={value}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        );
    }
);
