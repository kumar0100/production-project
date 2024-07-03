import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store-provider";
import { getLoginPassword } from "./getLoginPasswors";

describe("getLoginPassword.test", () => {
    test("true", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'password',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('password');
    });

    test("emty", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual(undefined);
    });
});
