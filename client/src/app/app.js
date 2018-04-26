// =========================| App |========================= //



//--------------------------| Import

import React from 'react';
import { hot } from 'react-hot-loader';
import HomePage from './components/templates/homepage';
import './app.scss';


//--------------------------| Body

const App = () => (
  <div id="app">
    <HomePage />
  </div>
);


//--------------------------| Export

export default hot(module)(App);
