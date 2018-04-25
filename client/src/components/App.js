// =========================| App |========================= //



//--------------------------| Import

import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';


//--------------------------| Body

const App = () => (
  <div>
    <h1 className="ttl">Hello, World!</h1>
  </div>
);


//--------------------------| Export

export default hot(module)(App);
