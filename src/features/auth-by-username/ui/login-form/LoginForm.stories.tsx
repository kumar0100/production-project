import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/store-decorator/StoreDecorator";
import LoginForm from "./LoginForm";

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

Ligth.decorators = [
    StoreDecorator({
        loginForm: {
            username: "fasfd",
            password: "fdsaf",
        },
    }),
];
