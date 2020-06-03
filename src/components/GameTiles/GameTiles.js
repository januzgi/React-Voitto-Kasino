import React from 'react';
import GameTile from './GameTile/GameTile';
import classes from './GameTiles.module.css';

const GameTiles = () => {
  return (
    <div className={classes.GameTiles}>
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
    </div>
  );
};

export default GameTiles;
