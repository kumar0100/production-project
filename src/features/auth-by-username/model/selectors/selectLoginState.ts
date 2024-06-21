import { StateSchema } from "app/providers/store-provider/config/StateSchema";

export const getLoginState = (state: StateSchema) => state.loginForm;
