import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
import { Select, SelectOption } from "shared/ui/select/Select";
import { ArticleSortField } from "entities/article/model/types/article";
import { SortOrder } from "shared/types";
import cls from "./ArticleSortSelect.module.scss";

interface ArticleSortSelectProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelect = memo((props: ArticleSortSelectProps) => {
    const { t } = useTranslation();
    const { className, sort, order, onChangeOrder, onChangeSort } = props;
    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: "asc",
                content: t("Growing"),
            },
            {
                value: "desc",
                content: t("Lowing"),
            },
        ],
        []
    );
    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t("Date of create"),
            },
            {
                value: ArticleSortField.TITLE,
                content: t("Title"),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t("Wievs"),
            },
        ],
        []
    );

    return (
        <div className={classNames(cls.ArticleSortSelect, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t("Sort PO")}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                className={cls.order}
                options={orderOptions}
                label={t("Po")}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
