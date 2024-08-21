import { MutableRefObject, useCallback, useRef } from "react";

export const useDebounce = (
    callBack: (...args: any[]) => void,
    delay: number,
) => {
    const timer = useRef() as MutableRefObject<any>;
    return useCallback((...args: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callBack(...args);
        }, delay);
    }, [callBack, delay]);
};
