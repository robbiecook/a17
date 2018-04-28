// =========================| Board level |========================= //



//--------------------------| Import

import React from 'react';
import Switch from '../../atoms/switch';
import './board-level.scss';


//--------------------------| Body

const BoardLevel = (props) => {
  console.log(`Switchers on level ${props.level}`);
  console.log(props.switchers);

  return (
    <div className='pm-board-level'>
      {
        props.switchers.map((switcher, index) => (
          <div key={index} className="pm-board-level--item">
            <Switch data={switcher} on={false} />
          </div>
        ))
      }
    </div>
  );
};


//--------------------------| Export

export default BoardLevel;
