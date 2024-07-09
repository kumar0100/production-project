import { StoreProvider } from "./ui/StoreProvider";
import { createReduxSore } from "./config/store";
import type { StateSchema, ReduxStoreWithManager, ThunkConfig } from "./config/StateSchema";
import type { AppDispatch } from "./config/store";

export {
    StoreProvider,
    createReduxSore,
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
};
