import { TestAsyncThunk } from "shared/lib/tests/test-async-funk/TestAsyncFunk";
import { Currency } from "entities/currency";
import { Country } from "entities/country";
import { fetchProfileData } from "./fetchProfileData";

describe("fetchProfileData.test", () => {
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
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk("1");
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error login", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk("1");

        expect(result.meta.requestStatus).toBe("rejected");
    });
});
