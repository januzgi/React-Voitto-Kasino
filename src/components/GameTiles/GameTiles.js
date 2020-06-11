import React from 'react';
import GameTile from './GameTile/GameTile';
import classes from './GameTiles.module.css';

const GameTiles = () => {
  return (
    <div className={classes.gameTiles}>
      <GameTile />
      <GameTile midTile={'midTile'} />
      <GameTile />
      <GameTile />
      <GameTile midTile={'midTile'} />
      <GameTile />
      <GameTile />
      <GameTile midTile={'midTile'} />
      <GameTile />
    </div>
  );
};

export default GameTiles;
