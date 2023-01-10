export const styleLoader = {
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
  };
  