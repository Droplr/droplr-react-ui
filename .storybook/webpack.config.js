module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['airbnb'],
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['airbnb'],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
