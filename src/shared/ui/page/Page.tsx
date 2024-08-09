import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { memo, MutableRefObject, ReactNode, useRef, UIEvent } from "react";
import { useInfiniteScroll } from "shared/lib/hooks/use-infinite-scrall/useInfiniteScrall";
import { useAppDispatch } from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import { getUIScrollByPath, uiAction } from "features/UI";
import { useLocation } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/use-initial-effect/useInitialEffect";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/store-provider";
import { useTrottle } from "shared/lib/hooks/use-trottle/useTrottle";
import cls from "./Page.module.scss";

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const { t } = useTranslation();
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));
    const onScroll = useTrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            uiAction.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            })
        );
    }, 500);
    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });
    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });
    return (
        <div
            ref={wrapperRef}
            onScroll={onScroll}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </div>
    );
});
