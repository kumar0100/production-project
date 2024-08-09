import { useCallback, useRef } from "react";

export const useTrottle = (callBack: (...args: any[]) => void, delay: number) => {
    const trottlingRef = useRef(false);
    return useCallback((...args: any[]) => {
        if (!trottlingRef.current) {
            callBack(...args);
            trottlingRef.current = true;

            setTimeout(() => {
                trottlingRef.current = false
            }, delay)
        }
    }, []);
};
