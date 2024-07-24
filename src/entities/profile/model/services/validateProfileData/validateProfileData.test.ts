import { Currency } from "entities/currency";
import { Country } from "entities/country";
import { validateProfileData } from "./validateProfileData";
import { ValidateProfileError } from "../../types/profile";

describe("validateProfileData.test", () => {
    const data = {
        username: "Kumar",
        age: 20,
        lastname: "Zhekshenbekovich",
        city: "Bishkek",
        currency: Currency.RUB,
        country: Country.Armenia,
        first: "kumar",
    };
    test("success", async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test("error auth data", async () => {
        const result = validateProfileData({
            ...data,
            first: "",
            lastname: "",
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test("error age", async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
});
