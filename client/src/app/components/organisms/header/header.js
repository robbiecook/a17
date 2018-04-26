// =========================| Header |========================= //



//--------------------------| Import

import React from 'react';
import pkg from '../../../../../../package.json';
import './header.scss';


//--------------------------| Body

const Header = () => (
  <div className="po-header">
    <span>{pkg.title}</span>
  </div>
);


//--------------------------| Export

export default Header;
