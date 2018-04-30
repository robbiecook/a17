// =========================| App |========================= //



//--------------------------| Import

import React from 'react';
import { hot } from 'react-hot-loader';
import Header from './components/organisms/header';
import Board from './components/organisms/board';
import Controllers from './components/organisms/controllers';
import HomePage from './components/templates/homepage';
import { rooms, devices, switchers } from '../model.json';
import './app.scss';


//--------------------------| Body

class App extends React.Component {
  state = {
    devices,
    rooms,
    switchers
  };

  updateCategory = (cat, type, selection) => this.state[cat].map((item) => {
    item.active = type === cat && item.name === selection;

    return item;
  });

  updateSwitchers = (type, selection) => this.state.switchers.map((switcher) => {
    switcher.glow = switcher[type] && switcher[type].indexOf(selection) !== -1;

    return switcher;
  });

  handleSelection = (type, selection) => {
    this.setState(() => ({
      devices: this.updateCategory('devices', type, selection),
      rooms: this.updateCategory('rooms', type, selection),
      switchers: this.updateSwitchers(type, selection)
    }));
  };

  render() {
    return (
      <div id="app">
        <HomePage>
          <Header key='header' />
          <Board key='main' switchers={this.state.switchers} />
          <Controllers
            key='section'
            handleSelection={this.handleSelection}
            devices={this.state.devices}
            rooms={this.state.rooms}
          />
        </HomePage>
      </div>
    );
  }
}


//--------------------------| Export

export default hot(module)(App);
