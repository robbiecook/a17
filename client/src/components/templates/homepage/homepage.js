// =========================| Home page |========================= //



//--------------------------| Import

import React from 'react';
import Header from '../../organisms/header';
import Board from '../../organisms/board';
import Controllers from '../../organisms/controllers';
import './homepage.scss';


//--------------------------| Body

const HomePage = () => (
  <div className="pt-homepage">
    <header className="pt-homepage--header">
      <Header />
    </header>

    <main className="pt-homepage--main">
      <section className="pt-homepage--section">
        <Board />
      </section>

      <section className="pt-homepage--section">
        <Controllers />
      </section>
    </main>
  </div>
);


//--------------------------| Export

export default HomePage;
