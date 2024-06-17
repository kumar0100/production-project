import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/theme-decorator/THemeDecorator";
import { Theme } from "app/providers/theme-provider/lib/ThemeContext";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
    title: "shared/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Ligth: Story = {
    args: {
        isOpen: true,
        children: 'djfklajdklsfjlkadsjklgnlksadnklfjkldsamkofgh',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'djfklajdklsfjlkadsjklgnlksadnklfjkldsamkofgh',
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
