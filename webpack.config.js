const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        enforce: 'pre'
      }
    ],
  },
  devServer: {
    port: 3000,
    inline: true,
    contentBase: "./build",
  },
  mode: 'development',
}
