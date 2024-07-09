import { StateSchema } from "app/providers/store-provider";
import { getLoginError } from "./getLoginError";

describe("getLoginError.test", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: "error",
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual("error");
    });
    test("should work with emty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
