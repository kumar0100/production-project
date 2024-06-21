import { StateSchema } from "app/providers/store-provider/config/StateSchema";

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username;
