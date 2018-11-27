const path = require('path');

module.exports = [
  {
    entry: './src/index.js',
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /(node_modules|build)/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    externals: [
      { react: { root: 'React', amd: 'react', commonjs: 'react', commonjs2: 'react' } },
      { 'react-dom': { root: 'ReactDOM', amd: 'react-dom', commonjs: 'react-dom', commonjs2: 'react-dom' } },
    ],
  },
  {
    entry: './src/components/icons/index.js',
    mode: 'production',
    output: {
      path: path.resolve(__dirname),
      filename: 'icons.js',
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /(node_modules|build)/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    externals: [
      { react: { root: 'React', amd: 'react', commonjs: 'react', commonjs2: 'react' } },
      { 'react-dom': { root: 'ReactDOM', amd: 'react-dom', commonjs: 'react-dom', commonjs2: 'react-dom' } },
    ],
  },
];
