import { DeepPartial } from "@reduxjs/toolkit";
import { loginActions, loginReducer } from "./loginSlice";
import { LoginSchema } from "../types/loginSchema";

describe("loginSlice.test", () => {
    test("setUsername", () => {
        const state: DeepPartial<LoginSchema> = { username: 'user' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('userBitch'))).toStrictEqual({ username: 'userBitch' });
    });
    test("setPassword", () => {
        const state: DeepPartial<LoginSchema> = { password: 'password' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('userPass'))).toStrictEqual({ password: 'userPass' });
    });
});
