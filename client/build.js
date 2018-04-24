const webpack = require('webpack');
const chalk = require('chalk');
const webpackConfig = require('../configs/prod/webpack.config.prod');

webpack(webpackConfig).run(function(err, stats) {
  console.log(chalk.green('Compiled successfully!'));
});