import { merge } from 'webpack-merge';

import commonConfig from './webpack.common.js';

const prodConfig = merge(commonConfig, {
  mode: 'production',
  devtool: false,
  output: {
    ...commonConfig.output,
    filename: '[name].min.js',
  },
});

export default prodConfig;
