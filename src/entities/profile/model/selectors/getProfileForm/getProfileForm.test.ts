import { StateSchema } from "app/providers/store-provider";
import { Currency } from "entities/currency";
import { Country } from "entities/country";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm.test", () => {
    test("should return error", () => {
        const data = {
            username: "Kumar",
            age: 20,
            lastname: "Zhekshenbekovich",
            city: "Bishkek",
            currency: Currency.RUB,
            country: Country.Armenia,
            first: "kumar",
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
