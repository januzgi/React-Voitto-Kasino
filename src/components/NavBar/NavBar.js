import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';
import MainNav from './MainNav/MainNav';
import SearchBar from './SearchBar/SearchBar';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className={classes.navBar}>
        <div className={classes.wrapper}>
          <div>
            <Link to='/'>
              <h1 className={classes.logoTeksti}>Kasino</h1>
            </Link>
          </div>
          <div>
            <MainNav
              isAdmin={this.props.isAdmin}
              loggedIn={this.props.loggedIn}
              balanceValue={this.props.balanceValue}
              currency={this.props.currency}
              addBalance={this.props.addBalance}
            ></MainNav>
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>
    );
  }
}
