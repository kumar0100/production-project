import React from "react";
import { StoryFn } from "@storybook/react/*";
import { StateSchema } from "app/providers/store-provider/config/StateSchema";
import { StoreProvider } from "app/providers/store-provider";

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: StoryFn) => (
    <StoreProvider initialState={state}>
        <Story />
    </StoreProvider>
);
