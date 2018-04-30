// =========================| Home page |========================= //



//--------------------------| Import

import React from 'react';
import getComponent from '../../../helpers/get-component';
import './homepage.scss';


//--------------------------| Body

const HomePage = props => (
  <div className="pt-homepage">
    <header className="pt-homepage--header">
      {getComponent(props.children, 'header')}
    </header>

    <main className="pt-homepage--main">
      <section className="pt-homepage--section">
        {getComponent(props.children, 'main')}
      </section>

      <section className="pt-homepage--section">
        {getComponent(props.children, 'section')}
      </section>
    </main>
  </div>
);


//--------------------------| Export

export default HomePage;
