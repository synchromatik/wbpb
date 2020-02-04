const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const loaders = require('./loaders');

module.exports = {
  entry: ['./src/index.js'],
  module: {
    rules: [
      loaders.JSLoader,
      loaders.ESLintLoader,
      loaders.SCSSLoader,
      loaders.SVGLoader,
      loaders.IMAGELoader,
    ],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  devtool: 'cheap-module-eav1-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    quiet: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
};
