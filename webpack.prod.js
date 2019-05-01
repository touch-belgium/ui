const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebappWebpackPlugin = require('webapp-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [path.resolve(__dirname, "resources/css")],
                  implementation: require("dart-sass")
                }
              }],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      /* filename: devMode ? '[name].css' : '[name].[hash].css',
       * chunkFilename: devMode ? '[id].css' : '[id].[hash].css', */
      filename: '[name]-[hash].css',
      chunkFilename: '[id]-[hash].css',
    }),
    new WebappWebpackPlugin({
      logo: path.resolve(__dirname, 'resources/img/logo.png'),
      cache: true,
      prefix: 'icons/',
      inject: true,
    })
  ]
});
