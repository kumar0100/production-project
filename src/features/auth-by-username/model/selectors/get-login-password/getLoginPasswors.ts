import { StateSchema } from "app/providers/store-provider/config/StateSchema";

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password;
