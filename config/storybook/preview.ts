import type { Preview } from "@storybook/react";
import { Theme } from "app/providers/theme-provider/lib/ThemeContext";
import { RouterDecorator } from "shared/config/storybook/router-decorator/RouterDecorator";
import { StoreDecorator } from "shared/config/storybook/store-decorator/StoreDecorator";
import { StyleDecorator } from "shared/config/storybook/style-decorator/StyleDecorator";
import { ThemeDecorator } from "shared/config/storybook/theme-decorator/THemeDecorator";
import { TranslationDecorator } from "shared/config/storybook/translation-decorator/TranslationDecorator";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        StoreDecorator({
            loginForm: { username: "fdsafd", password: "fdsaf" },
        }),
        TranslationDecorator,
    ],
};

export default preview;
