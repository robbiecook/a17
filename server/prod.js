const path = require('path');
const opn = require('opn');
const express = require('express');
const pkg = require('../package.json');

const app = express();
const publicPath = path.join(__dirname, '..', 'client/dist');
const port = pkg.ports.prod;
const browser = process.platform === 'win32' ? 'Chrome' : '/Applications/Google Chrome.app';

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');

  opn(`http://localhost:${port}`, {
    app: browser
  });
});
