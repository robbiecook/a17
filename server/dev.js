const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const opn = require('opn');
const config = require('../configs/dev/webpack.config.dev');
const pkg = require('../package.json');

const port = pkg.ports.dev;
const browser = process.platform === 'win32' ? 'Chrome' : '/Applications/Google Chrome.app';

const server = new WebpackDevServer(Webpack(config), {
  hot: true,
  historyApiFallback: true,
  // It suppress error shown in console, so it has to be set to false.
  quiet: false,
  // It suppress everything except error, so it has to be set to false as well to see success build.
  noInfo: false,
  stats: {
    version: false,
    children: false,
    modules: false,
    chunks: false,
    chunkModules: false,
    colors: true
  }
});

server.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at localhost:${port}`);

  opn(`http://localhost:${port}`, {
    app: browser
  });
});
