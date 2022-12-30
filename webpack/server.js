const devServer = {
  host: 'localhost',
  port: 8000,
  hot: true,
  open: false,
  compress: true,
  liveReload: true,
  static: ['public'],
  historyApiFallback: true,
  client: {
    logging: 'info',
    overlay: true,
    reconnect: 3,
  },
  watchFiles: {
    paths: ['src/**/*.*', 'public/**/*.*'],
  },
};

export default devServer;
