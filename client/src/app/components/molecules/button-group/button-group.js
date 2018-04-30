// =========================| Button group |========================= //



//--------------------------| Import

import React from 'react';
import Button from '../../atoms/button';
import './button-group.scss';


//--------------------------| Body

const ButtonGroup = ({ items }) => (
  <ul className="pm-button-group">
    { items.map((item, index) => (
      <li className='item' key={item.name}>
        <Button title={item.title} />
      </li>
    )) }
  </ul>
);


//--------------------------| Export

export default ButtonGroup;
