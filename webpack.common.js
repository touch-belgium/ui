const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

var API_URLS = {
  production: JSON.stringify('https://admin.touchb.shop/api/'),
  development: JSON.stringify('http://localhost:8000/api/')
};

var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  entry: {
    main: './js/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: '[name]-[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader']
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, "js")],
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
        test: /\.(eot|otf|ttf|woff|woff2|webm|mp4)$/,
        loader: 'file-loader',
        options: {
          /* Gunicorn, heroku, dokku etc can serve the font asset
             correctly, the development server cannot without this
             option. */
          publicPath: "/",
        }
      },

    ]
  },
  /* resolve makes it easier for JS files to look for style files:
     import css from "Styles/filename.scss" */
  resolve: {
    modules: ['node_modules'],
    alias: {
      Styles: path.resolve(__dirname, 'css/'),
      Images: path.resolve(__dirname, 'img/'),
      Fonts: path.resolve(__dirname, 'fonts/'),
      Videos: path.resolve(__dirname, 'video/'),
      /* This way, import Vue from 'vue' will get the full standalone
         vue, not just the runtime build */
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
    new webpack.DefinePlugin({
      'API': API_URLS[environment]
    }),
    new MomentLocalesPlugin({
      localesToKeep: ['en', 'fr', 'nl'],
    }),
  ]
};
