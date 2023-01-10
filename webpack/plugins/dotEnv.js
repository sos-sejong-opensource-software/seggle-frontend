import DotenvWebpackPlugin from 'dotenv-webpack';

export const dotEnv = new DotenvWebpackPlugin({
  path: '.env',
});
