import React from 'react';
import classes from './Ad.module.css';

const Ad = () => {
  return (
    <div className={classes.adContainer}>
      <div className={classes.adHeader}>MAINOS</div>
      <div>mainoksen sisältö</div>
    </div>
  );
};

export default Ad;
