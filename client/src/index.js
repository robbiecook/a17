// =========================| Switchboard A17 |========================= //



//--------------------------| Import

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Model from './model.json';


//--------------------------| Body

console.log('Model:', Model);

const root = document.createElement('div');

root.id = 'root';

document.body.appendChild(root);


//--------------------------| Render

ReactDOM.render(<App />, root);
