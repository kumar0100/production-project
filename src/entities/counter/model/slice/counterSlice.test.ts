import { counterSchema } from "../type/counterSchema";
import { counterActions, counterReducer } from "./counterSlice";

describe("counterSlice", () => {
    test("increment", () => {
        const state: counterSchema = { value: 5 };
        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 6,
        });
    });
    test("decrement", () => {
        const state: counterSchema = { value: 5 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: 4,
        });
    });

    test("undefined", () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });
});
