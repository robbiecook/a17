// =========================| Button |========================= //



//--------------------------| Import

import React from 'react';
import classNames from 'classnames';
import './button.scss';


//--------------------------| Body


const Button = (props) => {
  const classes = classNames('pa-button', {
    active: props.active
  });

  return (
    <a className={classes} onClick={() => {
      props.handleClick(props.name);
    }}>
      {props.title}
    </a>
  );
};


//--------------------------| Export

export default Button;
