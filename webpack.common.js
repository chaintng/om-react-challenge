const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin( [ 'NODE_ENV', 'BACKEND_ENDPOINT' ]),
  ],
};

module.exports = config;
