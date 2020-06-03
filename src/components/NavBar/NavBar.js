import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';
import MainNav from './MainNav/MainNav';
import SearchBar from './SearchBar/SearchBar';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className={classes.NavBar}>
        <div className={classes.Logo}>
          <Link to='/'>
            <h1 className={classes.LogoTeksti}>Kasino</h1>
          </Link>
        </div>
        <MainNav
          isAdmin={this.props.isAdmin}
          loggedIn={this.props.loggedIn}
        ></MainNav>
        <SearchBar></SearchBar>
      </div>
    );
  }
}
