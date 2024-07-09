import { AppDispatch } from "app/providers/store-provider";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
