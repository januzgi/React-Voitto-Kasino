import React from 'react';
import classes from './Ad.module.css';
import Ad1 from '../../../img/mainos_1.jpg';
import Ad2 from '../../../img/mainos_2.jpg';

const Ad = (props) => {
  // Aseta taustakuva propsien perusteella
  let image = Ad1;
  switch (props.adName) {
    case 'mainos_1':
      break;
    case 'mainos_2':
      image = Ad2;
      break;
    default:
  }

  return (
    <div
      className={classes.adContainer}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={classes.adHeader}>MAINOS</div>
    </div>
  );
};

export default Ad;
