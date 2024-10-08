import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ThemeDecorator } from "shared/config/storybook/theme-decorator/THemeDecorator";
import { Theme } from "app/providers/theme-provider/lib/ThemeContext";
import { Button, ButtonSize, ThemeButton } from "./Button";

const meta: Meta<typeof Button> = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Text",
    },
};

export const Clear: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.CLEAR,
    },
};

export const Outlined: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.OUTLINE,
    },
};

export const DarkOutline: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.OUTLINE,
    },
};

DarkOutline.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: "<",
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: "<",
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: "<",
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
