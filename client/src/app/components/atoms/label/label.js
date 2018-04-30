// =========================| Label |========================= //



//--------------------------| Import

import React from 'react';
import './label.scss';


//--------------------------| Body

const Label = props => (
  <label className="pa-label">
    {props.text}
  </label>
);


//--------------------------| Export

export default Label;
