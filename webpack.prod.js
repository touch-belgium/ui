const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebappWebpackPlugin = require('webapp-webpack-plugin')

const common = require('./webpack.common.js');

//const devMode = process.env.NODE_ENV !== 'production'

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/,
      include: [path.resolve(__dirname, 'website/styles')],
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader',
        options: {
          implementation: require("dart-sass")
        }
      }],
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      /* filename: devMode ? '[name].css' : '[name].[hash].css',
       * chunkFilename: devMode ? '[id].css' : '[id].[hash].css', */
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new UglifyJSPlugin({
      parallel: 4
    }),
    new WebappWebpackPlugin({
      logo: path.resolve(__dirname, 'website/img/logo.png'),
      cache: true,
      prefix: 'icons/',
      inject: false,
    })
  ]
});
