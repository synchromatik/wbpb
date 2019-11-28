const path = require('path');

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    },
  },
};
const SCSSLoader = {
  test: /\.scss$/,
  use: ['style-loader', 'css-loader', 'sass-loader']
};

const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: path.resolve(__dirname, '.eslintrc'),
      emitError: true,
      failOnWarning: true,
      failOnError: true,
    },
  },
};

module.exports = {
  JSLoader: JSLoader,
  ESLintLoader: ESLintLoader,
  SCSSLoader: SCSSLoader
};

