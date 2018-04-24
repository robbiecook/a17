const path = require('path');
const dist  = path.join(__dirname, '../../client/dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('../../package.json');

module.exports = {
  mode: 'production',
  entry: './client/src/index.js',
  output: {
    path: dist,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings,
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              // modules: true
            }
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
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
    })
  ],
  devtool: 'source-map'
};
