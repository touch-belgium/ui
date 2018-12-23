const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "vue-style-loader"/* needed if CSS is going to be embedded in the bundle.js */
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
            options: {/* also use "~" in prefix for node_modules stylesheets */
              includePaths: [path.resolve(__dirname, "css")],
              implementation: require("dart-sass")
            }
          }]
      },
    ]
  },
  devServer: {
    proxy: {
      '/media/*.(png|jpg|jpeg)': {
        target: "http://localhost:8000",
        secure: false
      }
    }
  }

});
