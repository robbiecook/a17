// =========================| Board |========================= //



//--------------------------| Import

import React from 'react';
import _ from 'lodash';
import BoardLevel from '../../molecules/board-level';
import './board.scss';


//--------------------------| Body

const Board = (props) => {
  const levels = props.switchers.map(e => e.level).filter((e, i, a) => i === a.indexOf(e));

  return (
    <div className="po-board">
      {
        levels.map((level, index) => (
          <BoardLevel
            key={index}
            level={level}
            switchers={_.filter(props.switchers, switcher => switcher.level === level)}
          />
        ))
      }
    </div>
  );
};


//--------------------------| Export

export default Board;
