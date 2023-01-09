import HtmlWebpackPlugin from 'html-webpack-plugin';

import paths from '../paths.js';

export const htmlWebpack = new HtmlWebpackPlugin({
  template: `${paths.public}/index.html`,
  favicon: `${paths.public}/favicon.ico`,
  filename: 'index.html',
});
