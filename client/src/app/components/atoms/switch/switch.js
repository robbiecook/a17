// =========================| Switch |========================= //



//--------------------------| Import

import React from 'react';
import classNames from 'classnames';
import Meta from '../meta';
import './switch.scss';


//--------------------------| Body

const Switch = ({
  features,
  wings,
  role,
  label,
  glow
}) => {
  const classes = classNames('pa-switch', {
    fat: features && features.indexOf('fat') !== -1,
    black: features && features.indexOf('black') !== -1,
    glow
  });

  return (
    <a className={classes} data-wings={wings} data-role={role.name}>
      <span className="lever"><span className="bar"></span></span>
      <Meta text={label} />
    </a>
  );
};


//--------------------------| Export

export default Switch;
