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
              includePaths: [path.resolve(__dirname, "assets/css")],
              implementation: require("dart-sass")
            }
          }]
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2|webm|mp4)$/,
        loader: 'file-loader',
        options: {
          /* Gunicorn, heroku, dokku etc can serve the font asset
             correctly, the development server cannot without this
             option. */
          // publicPath: "/",
        }
      },
    ]
  },
});
