import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../type/profile";
import { fetchProfileData } from "../services/fetch-profile-data/fetchProfileData";

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                // action is inferred correctly here if using TS
                state.isLoading = true;
            })
            // You can chain calls, or have separate `builder.addCase()` lines each time
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload
                console.log(action.payload)
                state.error = undefined;
            })
            // You can match a range of action types
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log(action.payload);
                console.log('go fuck yourself');
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
