const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './assets/js/index.js',
    landing: './assets/js/landing.js',
  },

  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: '[name]-[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, "assets/js")],
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'images/[hash]-[name].[ext]',
        }
      },
    ]
  },
  /* resolve makes it easier for JS files to look for style files:
     import css from "Styles/filename.scss" */
  resolve: {
    modules: ['node_modules'],
    alias: {
      Styles: path.resolve(__dirname, 'assets/css/'),
      Images: path.resolve(__dirname, 'assets/img/'),
      Fonts: path.resolve(__dirname, 'assets/fonts/'),
      Videos: path.resolve(__dirname, 'assets/video/'),
      /* Import Vue from 'vue' will get the full standalone vue, not
         just the runtime build */
      vue: 'vue/dist/vue.min.js',
    }
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'build')],
                           {exclude: ['icons']}),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      chunksSortMode: 'dependency'
    }),
  ]
};
