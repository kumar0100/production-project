import { StateSchema } from "app/providers/store-provider/config/StateSchema";

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
