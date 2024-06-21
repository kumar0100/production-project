import { StateSchema } from "app/providers/store-provider/config/StateSchema";

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading;
