// =========================| Webpack Config: Dev |========================= //



//--------------------------| Import

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
      title: pkg.title,
      template: 'client/src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  devtool: 'cheap-module-eval-source-map'
};


//--------------------------| Export

module.exports = config;
