const path = require('path');

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/react'],
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
  },
};

const SCSSLoader = {
  test: /\.scss$/,
  use: ['style-loader', 'css-loader', 'sass-loader'],
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

const SVGLoader = {
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        native: true,
      },
    },
  ],
};

const IMAGELoader = {
  test: /\.(png|jpg|gif)$/,
  use: [
    'file-loader',
  ],
};

module.exports = {
  JSLoader, ESLintLoader, SCSSLoader, SVGLoader, IMAGELoader,
};
