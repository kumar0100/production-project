import { TestAsyncThunk } from "shared/lib/tests/test-async-funk/TestAsyncFunk";
import { Currency } from "entities/currency";
import { Country } from "entities/country";
import { updateProfileData } from "./updateProfileData";
import { ValidateProfileError } from "../../types/profile";

describe("updateProfileData.test", () => {
    const data = {
        username: "Kumar",
        age: 20,
        lastname: "Zhekshenbekovich",
        city: "Bishkek",
        currency: Currency.RUB,
        country: Country.Armenia,
        first: "kumar",
    };
    test("success login", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error login", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
});
