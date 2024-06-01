import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolves = (option: BuildOptions): ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [option.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
});
