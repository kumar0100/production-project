import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBableLoader } from './loaders/buildBableLoader';

export const buildLoaders = (option: BuildOptions): webpack.RuleSetRule[] => {
    const { isDev } = option;
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    const cssLoaders = buildCssLoader(isDev);

    const babelLoaders = buildBableLoader(option);
    const svgLoaders = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoaders = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    return [cssLoaders, svgLoaders, fileLoaders, babelLoaders, typescriptLoader];
};
