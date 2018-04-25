// =========================| App |========================= //



//--------------------------| Import

import React from 'react';
import './App.scss';
import { hot } from 'react-hot-loader'


//--------------------------| Body

class App extends React.Component {
  state = {

  };

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}


//--------------------------| Export

export default hot(module)(App);
