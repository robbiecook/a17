// =========================| App |========================= //



//--------------------------| Import

import React from 'react';
import { hot } from 'react-hot-loader';
import Header from './components/organisms/header';
import Board from './components/organisms/board';
import Controllers from './components/organisms/controllers';
import HomePage from './components/templates/homepage';
import Model from '../model.json';
import './app.scss';


//--------------------------| Body

const App = () => (
  <div id="app">
    <HomePage>
      <Header key='header' />
      <Board key='main' switchers={Model.switchers} />
      <Controllers key='section' />
    </HomePage>
  </div>
);


//--------------------------| Export

export default hot(module)(App);
