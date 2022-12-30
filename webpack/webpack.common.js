import { resolve } from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

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
    rules: [
      {
        test: /\.(js|ts)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  corejs: { version: 3, proposals: true },
                  useBuiltIns: 'usage',
                  shippedProposals: true,
                },
              ],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
          },
        },
        exclude: /(node_modules)/,
      },
      { test: /\.tsx?$/i, loader: 'ts-loader' },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(ico|png|jpe?g|gif|jpeg|svg|woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${paths.public}/index.html`,
      favicon: `${paths.public}/favicon.ico`,
      filename: 'index.html',
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': resolve('src'),
    },
    plugins: [new TsconfigPathsPlugin()],
  },
};

export default commonConfig;
