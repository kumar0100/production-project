import { counterSchema } from "entities/counter/model/type/counterSchema";
import { UserSchema } from "entities/user";
import { LoginSchema } from "features/auth-by-username";

export interface StateSchema {
    counter: counterSchema;
    user: UserSchema;
    loginForm?: LoginSchema
}
