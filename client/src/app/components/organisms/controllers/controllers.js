// =========================| Controllers |========================= //



//--------------------------| Import

import React from 'react';
import ButtonGroup from '../../molecules/button-group';
import Label from '../../atoms/label';
import Meta from '../../atoms/meta';
import '../../../../styles/tokens/tokens_flexbox.scss';
import './controllers.scss';


//--------------------------| Body

const Controllers = props => (
  <div className="po-controllers">
    <Label text='Turn on switcher/s by:' />

    <div className="flex">
      <div className="column">
        <div data-role='devices'>
          <Label text='Device' />
          <ButtonGroup
            items={props.devices}
            handleSelection={(selection) => {
              props.handleSelection('devices', selection);
            }}
          />
        </div>
      </div>

      <div className="column">
        <Meta text='or' />
      </div>

      <div className="column">
        <div data-role='rooms'>
          <Label text='Room' />
          <ButtonGroup
            items={props.rooms}
            handleSelection={(selection) => {
              props.handleSelection('rooms', selection);
            }}
          />
        </div>
      </div>
    </div>
  </div>
);


//--------------------------| Export

export default Controllers;
