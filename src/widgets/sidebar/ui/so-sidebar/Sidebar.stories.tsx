import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

// eslint-disable-next-line max-len
import { ThemeDecorator } from "shared/config/storybook/theme-decorator/THemeDecorator";
import { Theme } from "app/providers/theme-provider/lib/ThemeContext";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
    title: "widjets/Sidebar",
    component: Sidebar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Ligth: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
