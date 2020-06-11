import React from 'react';
import classes from './OrganizerTab.module.css';
import { NavLink } from 'react-router-dom';

const OrganizerTab = () => {
  // Lisää aktiivisen tabin alle palkki
  const activeDiv = (id) => {
    // Hae aktiivinen itemi
    var current = document.getElementsByClassName(classes.activeItemDiv);
    // Jos on aktiivinen itemi niin poista siitä aktiivinen luokka
    if (current.length > 0) {
      current[0].className = current[0].className.replace(
        `${classes.categoryItem} ${classes.activeItemDiv}`,
        `${classes.categoryItem}`
      );
    }
    // Lisää activeItemDiv -class klikattuun diviin
    document.getElementById(
      id
    ).className = `${classes.categoryItem} ${classes.activeItemDiv}`;
  };

  // Tarkista jos ei olla /pelit/hedelmapelit/ -URLin alla ja ota aktiivinen palkki pois
  if (!window.location.href.includes('/pelit/hedelmapelit/')) {
    // Hae aktiivinen itemi
    var current = document.getElementsByClassName(classes.activeItemDiv);
    // Jos on aktiivinen itemi niin poista siitä aktiivinen luokka
    if (current.length > 0) {
      current[0].className = current[0].className.replace(
        `${classes.categoryItem} ${classes.activeItemDiv}`,
        `${classes.categoryItem}`
      );
    }
  }

  return (
    <div className={classes.organizerTab}>
      <div className={classes.organizerHeader}>
        <h1>Järjestä pelit</h1>
      </div>
      <div className={classes.categoriesContainer}>
        <div
          className={classes.categoryItem}
          onClick={() => activeDiv('voittoprosentti')}
          id='voittoprosentti'
        >
          <NavLink
            to='/pelit/hedelmapelit/voittoprosentti'
            activeClassName='active'
            className={classes.itemText}
          >
            Voittoprosentti %
          </NavLink>
        </div>
        <div
          className={classes.categoryItem}
          onClick={() => activeDiv('suurinpotti')}
          id='suurinpotti'
        >
          <NavLink
            to='/pelit/hedelmapelit/suurinpotti'
            activeClassName='active'
            className={classes.itemText}
          >
            Suurin potti
          </NavLink>
        </div>
        <div
          className={classes.categoryItem}
          onClick={() => activeDiv('tasaisimmatvoitot')}
          id='tasaisimmatvoitot'
        >
          <NavLink
            to='/pelit/hedelmapelit/tasaisimmatvoitot'
            activeClassName='active'
            className={classes.itemText}
          >
            Tasaisimmat voitot
          </NavLink>
        </div>
        <div
          className={classes.categoryItem}
          onClick={() => activeDiv('halvinpanos')}
          id='halvinpanos'
        >
          <NavLink
            to='/pelit/hedelmapelit/halvinpanos'
            activeClassName='active'
            className={classes.itemText}
          >
            Halvin panos
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default OrganizerTab;
