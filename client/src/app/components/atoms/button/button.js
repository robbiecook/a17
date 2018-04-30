// =========================| Button |========================= //



//--------------------------| Import

import React from 'react';
import './button.scss';


//--------------------------| Body

const Button = props => (
  <a className="pa-button">
    {props.title}
  </a>
);


//--------------------------| Export

export default Button;
