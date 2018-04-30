// =========================| Button group |========================= //



//--------------------------| Import

import React from 'react';
import Button from '../../atoms/button';
import './button-group.scss';


//--------------------------| Body

const ButtonGroup = props => (
  <ul className="pm-button-group">
    { props.items.map((item, index) => (
      <li className='item' key={item.name}>
        <Button
          handleClick={(name) => {
            props.handleSelection(name);
          }}
          {...item}
        />
      </li>
    )) }
  </ul>
);


//--------------------------| Export

export default ButtonGroup;
