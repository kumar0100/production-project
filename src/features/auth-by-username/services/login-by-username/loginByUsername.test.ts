import axios from "axios";
import { userActions } from "entities/user";
import { TestAsyncFunk } from "shared/lib/tests/test-async-funk/TestAsyncFunk";
import { loginByUsername } from "./loginByUsername";

jest.mock("axios");
const mockedAxios = jest.mocked(axios, true);
describe("loginByUsername.test", () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    // test("sucsecc login", async () => {
    //     const userValue = { username: "123", id: "1" };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     const action = loginByUsername({ username: "123", password: "123" });
    //     const result = await action(dispatch, getState, undefined);

    //     expect(dispatch).toHaveBeenCalledWith(
    //         userActions.setAutData(userValue)
    //     );
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.payload).toEqual(userValue);
    //     expect(result.meta.requestStatus).toBe("fulfilled");
    // });

    // test("error login", async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsername({ username: "123", password: "123" });
    //     const result = await action(dispatch, getState, undefined);

    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(result.payload).toEqual("error");
    //     expect(result.meta.requestStatus).toBe("rejected");
    // });
    test("sucsecc login", async () => {
        const userValue = { username: "123", id: "1" };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncFunk(loginByUsername);
        const result = await thunk.callThunk({
            username: "123",
            password: "abc",
        });

        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setAutData(userValue),
        );
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.payload).toEqual(userValue);
        expect(result.meta.requestStatus).toBe("fulfilled");
    });

    test("error login", async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncFunk(loginByUsername);
        const result = await thunk.callThunk({
            username: "123",
            password: "abc",
        });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toEqual("error");
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
