import React from "react";
import { StoryFn } from "@storybook/react/*";
import { Theme } from "app/providers/theme-provider/lib/ThemeContext";
import { ThemeProvider } from "app/providers/theme-provider";

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div style={{ width: "100vh" }} className={`app ${theme}`}>
            <Story />
        </div>
        ;
    </ThemeProvider>
);
