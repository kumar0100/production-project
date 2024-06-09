import type { Preview } from "@storybook/react";
import { StyleDecorator } from "shared/config/storybook/style-decorator/StyleDecorator";

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
    StyleDecorator
  ]
};

export default preview;


