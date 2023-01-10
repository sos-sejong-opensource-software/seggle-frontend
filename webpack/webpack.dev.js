import { merge } from 'webpack-merge';

import commonConfig from './webpack.common.js';
import devServer from './server.js';
import { dotEnv } from './plugins/index.js';

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer,
  plugins: [dotEnv],
});

export default devConfig;
