import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export const buildLoaders = (option: BuildOptions): webpack.RuleSetRule[] => {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            option.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) =>
                            Boolean(resPath.includes(".module.")),
                        localIdentName: option.isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    };
    return [typescriptLoader, cssLoaders];
};
