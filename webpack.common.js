const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  entry: {
    main: './website/scripts/index.js',
    landing: './website/scripts/landing.js',
  },

  output: {
    path: path.resolve(__dirname, 'assets/webpack_bundles/'),
    filename: '[name]-[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, "website/scripts")],
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
      Styles: path.resolve(__dirname, 'website/styles/'),
      Images: path.resolve(__dirname, 'assets/img/'),
      Fonts: path.resolve(__dirname, 'assets/fonts/'),
      /* Import Vue from 'vue' will get the full standalone vue, not
      just the runtime build */
      vue: 'vue/dist/vue.js',
    }
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'assets/webpack_bundles')],
                           {exclude: ['icons']}),
    new BundleTracker({filename: './webpack-stats.json'}),
  ]
};
