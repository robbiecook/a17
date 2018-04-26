// =========================| App |========================= //



//--------------------------| Import

import React from 'react';
import { hot } from 'react-hot-loader';
import HomePage from './templates/homepage';
import './App.scss';


//--------------------------| Body

const App = () => (
  <div id="app">
    <HomePage />
  </div>
);


//--------------------------| Export

export default hot(module)(App);
