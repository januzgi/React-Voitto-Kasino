import React from 'react';
import HomeNav from './HomeNav/HomeNav';
import GameNav from './GameNav/GameNav';
import Ad from './Ad/Ad';
import classes from './SideBar.module.css';

// Sivupalkin navigaatiot ja mainokset
export default class SideBar extends React.Component {
  render() {
    return (
      <div className={classes.sideBar}>
        <HomeNav></HomeNav>
        <GameNav></GameNav>
        <Ad></Ad>
        <Ad></Ad>
      </div>
    );
  }
}
