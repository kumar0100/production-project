import { StateSchema } from "app/providers/store-provider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername.test", () => {
    test("Username", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Username',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('Username');
    });

    test("emty", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual(undefined);
    });
});
