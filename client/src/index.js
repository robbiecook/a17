// =========================| Switchboard A17 |========================= //



//--------------------------| Import

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Model from './model.json';
import './styles.scss';


//--------------------------| Body

console.log('Model:', Model);

const root = document.createElement('div');

root.id = 'root';

document.body.appendChild(root);


//--------------------------| Render

ReactDOM.render(<App />, root);
