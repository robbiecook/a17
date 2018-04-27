// =========================| Switchboard A17 |========================= //



//--------------------------| Import

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/scaffolding.scss';

import App from './app';


//--------------------------| Body

const root = document.createElement('div');

root.id = 'root';

document.body.appendChild(root);


//--------------------------| Render

ReactDOM.render(<App />, root);
