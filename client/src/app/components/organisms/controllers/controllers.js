// =========================| Controllers |========================= //



//--------------------------| Import

import React from 'react';
import ButtonGroup from '../../molecules/button-group';
import Label from '../../atoms/label';
import Meta from '../../atoms/meta';
import { devices, rooms, categories } from '../../../../model.json';
import '../../../../styles/tokens/tokens_flexbox.scss';
import './controllers.scss';


//--------------------------| Body

const Controllers = () => (
  <div className="po-controllers">
    <Label text='Show switcher/s for:' />

    <div className="flex">
      <div className="column">
        <div data-role='devices'>
          <ButtonGroup items={devices} />
        </div>
      </div>

      <div className="column">
        <Meta text='or' />
      </div>

      <div className="column">
        <div data-role='categories'>
          <ButtonGroup items={categories} />
        </div>

        <div data-role='rooms'>
          <ButtonGroup items={rooms} />
        </div>
      </div>
    </div>
  </div>
);


//--------------------------| Export

export default Controllers;
