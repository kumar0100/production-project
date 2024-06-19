import { counterSchema } from "entities/counter/model/type/counterSchema";
import { UserSchema } from "entities/user";
export interface StateSchema {
    counter: counterSchema;
    user: UserSchema;
}
