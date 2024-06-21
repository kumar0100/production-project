import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/theme-decorator/THemeDecorator";
import { Theme } from "app/providers/theme-provider/lib/ThemeContext";
import { LoginForm } from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/store-decorator/StoreDecorator";

const meta: Meta<typeof LoginForm> = {
    title: "features/LoginForm",
    component: LoginForm,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Ligth: Story = {
    args: {},
};

Ligth.decorators = [StoreDecorator({
    loginForm: {
        username: 'fasfd',
        password: 'fdsaf'
    }
})]
