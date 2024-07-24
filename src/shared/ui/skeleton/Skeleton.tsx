import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { CSSProperties, memo } from "react";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
    className?: string;
    height?: string | number;
    border?: string | number;
    width?: string | number;
}

export const Skeleton = memo(
    ({ className, height, width, border }: SkeletonProps) => {
        const { t } = useTranslation();
        const style: CSSProperties = {
            width,
            height,
            borderRadius: border,
        };
        return (
            <div className={classNames(cls.Skeleton, {}, [className])} style={style}></div>
        );
    }
);
