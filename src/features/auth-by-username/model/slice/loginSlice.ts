import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
// eslint-disable-next-line max-len
import { loginByUsername } from "features/auth-by-username/services/login-by-username/loginByUsername";
import { LoginSchema } from "../types/loginSchema";

const initialState: LoginSchema = {
    username: "",
    password: "",
    isLoading: false,
    error: null,
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loginByUsername.pending, (state) => {
                // action is inferred correctly here if using TS
                state.isLoading = true;
            })
            // You can chain calls, or have separate `builder.addCase()` lines each time
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
            })
            // You can match a range of action types
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log(action.payload);
                console.log('go fuck yourself');
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
