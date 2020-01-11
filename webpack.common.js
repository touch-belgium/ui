const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

let environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  entry: {
    main: './src/app.js'
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
        loader: 'vue-loader',
        // The following options allows relative, possibly aliased
        // URLs (eg. ~Images/photo.png) in bootstrap components
        // (eg. b-img)
        options: {
          transformAssetUrls: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href',
            'b-img': 'src',
            'b-img-lazy': ['src', 'blank-src'],
            'b-card': 'img-src',
            'b-card-img': 'img-src',
            'b-card-img-lazy': ['src', 'blank-src'],
            'b-carousel-slide': 'img-src',
            'b-embed': 'src'
          }
        }
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
      Styles: path.resolve(__dirname, 'src/css/'),
      Images: path.resolve(__dirname, 'resources/img/'),
      Fonts: path.resolve(__dirname, 'resources/fonts/'),
      Videos: path.resolve(__dirname, 'resources/video/'),
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
      template: 'src/index.html',
      inject: true
    }),
    new MomentLocalesPlugin({
      localesToKeep: ['en', 'fr', 'nl'],
    }),
  ]
};
