// =========================| Switch |========================= //



//--------------------------| Import

import React from 'react';
import classNames from 'classnames';
import './switch.scss';


//--------------------------| Body

const Switch = ({ data }) => {
  const classes = classNames('pa-switch', {
    fat: data.features && data.features.indexOf('fat') !== -1,
    black: data.features && data.features.indexOf('black') !== -1,
  });

  return (
    <a className={classes} data-wings={data.wings} data-role={data.role.name}>
      <span className="lever"></span>
      <span className="label">{data.label}</span>
    </a>
  );
};


//--------------------------| Export

export default Switch;
