import { StateSchema } from "app/providers/store-provider/config/StateSchema";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
    test("", () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 0 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(0);
    });
});
