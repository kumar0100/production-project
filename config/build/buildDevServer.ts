import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (option: BuildOptions): DevServerConfiguration => ({
    port: option.port,
    open: true,
    historyApiFallback: true,
    hot: true,
});
