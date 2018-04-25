// =========================| Webpack Config: Prod |========================= //



//--------------------------| Import

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const pkg = require('../../package.json');
const banner = require('./banner');


//--------------------------| Define

const dist = path.join(__dirname, '../../client/dist');


//--------------------------| Body

const config = {
  mode: 'production',
  entry: './client/src/index.js',
  output: {
    path: dist,
    filename: 'app.[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader', // translates CSS into CommonJS
              options: {
                // modules: true,
              }
            },
            {
              loader: 'sass-loader', // compiles Sass to CSS
            }
          ],
          fallback: 'style-loader' // creates style nodes from JS strings,
        })
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }]
  },
  plugins: [
    new CleanWebpackPlugin(['**/*.*'], {
      root:     dist,
      verbose:  true,
      dry:      false
    }),
    new HtmlWebpackPlugin({
      title: pkg.title,
      template: 'client/src/index.html'
    }),
    new ExtractTextPlugin('app.[chunkhash].css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    }),
    new webpack.BannerPlugin({ banner }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};


//--------------------------| Export

module.exports = config;
