// =========================| Header |========================= //



//--------------------------| Import

import React from 'react';
import pkg from '../../../../../../package.json';
import './header.scss';


//--------------------------| Body

const title = pkg.title.split(' ');

const Header = () => (
  <div className="po-header">
    <span>{title[0]} <strong>{title[1]}</strong></span>
  </div>
);


//--------------------------| Export

export default Header;
