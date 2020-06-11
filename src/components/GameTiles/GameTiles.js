import React from 'react';
import GameTile from './GameTile/GameTile';
import classes from './GameTiles.module.css';

const GameTiles = () => {
  return (
    <div className={classes.gameTiles}>
      <GameTile gameName={'4 Ässää'} />
      <GameTile gameName={'Big Win'} midTile={'midTile'} />
      <GameTile gameName={'Bingo'} />
      <GameTile gameName={'Casino Classic'} />
      <GameTile gameName={'Casino Nopat'} midTile={'midTile'} />
      <GameTile gameName={'Jackpot'} />
      <GameTile gameName={'Korttihai'} />
      <GameTile gameName={'Kuningasvärisuora'} midTile={'midTile'} />
      <GameTile gameName={'Pokeri'} />
    </div>
  );
};

export default GameTiles;
