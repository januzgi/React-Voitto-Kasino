import React, { Fragment } from 'react';
import classes from './GameTile.module.css';

const GameTile = (props) => {
  return (
    <Fragment>
      {/* Onko kyseessä keskimmäinen tiili */}
      {props.midTile ? (
        <div className={`${classes.gameTile} ${classes.midTile}`}>
          Pelin keskitiili
        </div>
      ) : (
        <div className={classes.gameTile}>Pelin tiili</div>
      )}
    </Fragment>
  );
};

export default GameTile;
