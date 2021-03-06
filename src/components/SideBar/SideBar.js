import React, { Fragment } from 'react';
import HomeNav from './HomeNav/HomeNav';
import GameNav from './GameNav/GameNav';
import Ad from './Ad/Ad';
import classes from './SideBar.module.css';

// Sivupalkin navigaatiot ja mainokset
export default class SideBar extends React.Component {
  render() {
    return (
      <div className={classes.sideBar}>
        <HomeNav
          admin={this.props.admin}
          loggedIn={this.props.loggedIn}
        ></HomeNav>
        {/* Onko kyseessä adminin vai tavallisen käyttäjän SideBar? */}
        {this.props.admin ? null : (
          <Fragment>
            <GameNav></GameNav>
            <Ad adName={'mainos_1'}></Ad>
            <Ad adName={'mainos_2'}></Ad>
          </Fragment>
        )}
      </div>
    );
  }
}
