const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server', './index'],
  output: {
    path: '__dirname',
    filename: './build/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  devServer: {
    hot: true,
  },
};
