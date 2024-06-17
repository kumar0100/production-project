import { StateSchema } from "app/providers/store-provider/config/StateSchema";

export const getCounter = (state: StateSchema) => state.counter;