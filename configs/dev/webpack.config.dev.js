// =========================| Webpack Config: Dev |========================= //



//--------------------------| Import

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const pkg = require('../../package.json');


//--------------------------| Body

const config = {
  mode: 'development',
  entry: [
    `webpack-dev-server/client?http://localhost:${pkg.ports.dev}`,
    `webpack/hot/only-dev-server`,
    `./client/src/index.js`
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings,
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              // modules: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/src/index.html',
      title: pkg.title,
    }),
    new StyleLintPlugin({
      files: ['./client/src/**/*.s?(a|c)ss'],
      syntax: 'scss',
      configFile: './configs/dev/.stylelintrc'
    }),
    new FaviconsWebpackPlugin('./client/src/favicon.png'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  devtool: 'cheap-module-eval-source-map'
};


//--------------------------| Export

module.exports = config;
