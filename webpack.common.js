const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  entry: './website/scripts/index.js',

  output: {
    path: path.resolve(__dirname, 'assets/webpack_bundles/'),
    filename: '[name]-[hash].js'
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
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
    ]
  },
  /* resolve makes it easier for JS files to look for style files:
     import css from "Styles/filename.scss" and for css files to find
     images, fonts etc */
  resolve: {
    modules: ['node_modules'],
    alias: {
      Styles: path.resolve(__dirname, 'website/styles/'),
      Images: path.resolve(__dirname, 'website/img/'),
      Fonts: path.resolve(__dirname, 'website/fonts/')
    }
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'assets/webpack_bundles')],
                           {exclude: ['icons']}),
    new BundleTracker({filename: './webpack-stats.json'}),
  ]
};
