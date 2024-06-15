import React from "react";
import { StoryFn } from "@storybook/react/*";
import { Theme } from "app/providers/theme-provider/lib/ThemeContext";

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => <div style={{ width: '100vh' }} className={`app ${theme}`}><Story /></div>;
