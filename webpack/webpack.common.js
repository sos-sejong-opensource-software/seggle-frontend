import { resolve } from 'node:path';

import { typescriptLoader, styleLoader, assetLoader } from './loaders/index.js';
import { htmlWebpack, tsConfigPaths } from './plugins/index.js';

import paths from './paths.js';

const commonConfig = {
  target: ['web', 'browserslist'],
  entry: {
    app: paths.src,
  },
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
    clean: true,
  },
  module: {
    rules: [typescriptLoader, styleLoader, assetLoader],
  },
  plugins: [htmlWebpack],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': resolve('src'),
    },
    plugins: [tsConfigPaths],
  },
};

export default commonConfig;
