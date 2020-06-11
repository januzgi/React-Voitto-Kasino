import React, { Fragment } from 'react';
import classes from './GameTile.module.css';
import Nelja_Assaa from '../../../img/pelikuvakkeet/4_ässää.jpg';
import Big_Win from '../../../img/pelikuvakkeet/big_win.jpg';
import Bingo from '../../../img/pelikuvakkeet/bingo.jpg';
import Casino_Classic from '../../../img/pelikuvakkeet/casino_clasic.jpg';
import Casino_Nopat from '../../../img/pelikuvakkeet/casino_nopat.jpg';
import Jackpot from '../../../img/pelikuvakkeet/jackpot.jpg';
import Korttihai from '../../../img/pelikuvakkeet/korttisymbolit.jpg';
import Kuningasvarisuora from '../../../img/pelikuvakkeet/kunkkuvärisuora.jpg';
import Pokeri from '../../../img/pelikuvakkeet/poker.jpg';

const GameTile = (props) => {
  // Aseta pelikuvake propsien perusteella
  let image = Nelja_Assaa;
  switch (props.gameName) {
    case '4 Ässää':
      break;
    case 'Big Win':
      image = Big_Win;
      break;
    case 'Bingo':
      image = Bingo;
      break;
    case 'Casino Classic':
      image = Casino_Classic;
      break;
    case 'Casino Nopat':
      image = Casino_Nopat;
      break;
    case 'Jackpot':
      image = Jackpot;
      break;
    case 'Korttihai':
      image = Korttihai;
      break;
    case 'Kuningasvärisuora':
      image = Kuningasvarisuora;
      break;
    case 'Pokeri':
      image = Pokeri;
      break;
    default:
  }

  // Vaihda valitun kategorian mukaan tietoa backdropissa
  let valittuKategoria = '';
  if (window.location.href.includes('voittoprosentti')) {
    valittuKategoria = 'Voittoprosentti %';
  } else if (window.location.href.includes('suurinpotti')) {
    valittuKategoria = 'Suurin potti';
  } else if (window.location.href.includes('tasaisimmatvoitot')) {
    valittuKategoria = 'Tasaisimmat voitot';
  } else if (window.location.href.includes('halvinpanos')) {
    valittuKategoria = 'Halvin panos';
  }

  return (
    <Fragment>
      {/* Onko kyseessä keskimmäinen tiili */}
      {props.midTile ? (
        <div
          className={`${classes.gameTile} ${classes.midTile}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={classes.gameTileBackdrop}>
            <h1>{props.gameName}</h1>
            <h2>{valittuKategoria}</h2>
            <h1>92</h1>
          </div>
        </div>
      ) : (
        <div
          className={classes.gameTile}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={classes.gameTileBackdrop}>
            <h1>{props.gameName}</h1>
            <h2>{valittuKategoria}</h2>
            <h1>92</h1>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default GameTile;
