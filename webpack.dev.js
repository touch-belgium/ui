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
              includePaths: [path.resolve(__dirname, "resources/css")],
              implementation: require("dart-sass")
            }
          }]
      },
    ]
  },
  devServer: {
    hot: true,
    proxy: {
      // Careful ! as this proxy might only go up to 1 level
      // (directory tree)
      '/media/*/*.(png|jpg|jpeg|doc|docx|pdf)': {
        target: "http://localhost:8000",
        secure: false
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'API_URL': JSON.stringify("http://localhost:8000/api"),
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
