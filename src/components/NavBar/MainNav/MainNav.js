import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, Image } from 'semantic-ui-react';
import classes from './MainNav.module.css';
// import { ReactComponent as addBalanceIcon } from '../../../ikonit/lisää.svg';
import addBalanceIcon from '../../../ikonit/lisää.svg';

// MainNav on oma komponenttinsa, sisältää NavBar:in päävalikon.
// Kirjautuneen käyttäjän mukaan (admin/tavallinen) näytetään eri MainNav
const MainNav = (props) => {
  return (
    <div className={classes.mainNav}>
      {props.loggedIn && props.isAdmin ? (
        <List horizontal>
          {/* Adminin näkymä */}
          <List.Item>
            <NavLink
              exact={true}
              to='/'
              activeClassName='active'
              className={classes.menuItem}
            >
              Pelit
            </NavLink>
          </List.Item>
          <List.Item>
            <NavLink
              to='/admin'
              activeClassName='active'
              className={`${classes.admin} ${classes.menuItem}`}
            >
              Admin
            </NavLink>
          </List.Item>
          <List.Item>
            <NavLink
              to='/kirjauduulos'
              activeClassName='active'
              className={classes.menuItem}
            >
              Kirjaudu ulos
            </NavLink>
          </List.Item>
        </List>
      ) : (
        <List horizontal className={classes.balanceList}>
          {/* Tavallisen käyttäjän näkymä */}
          <List.Item>
            <NavLink
              exact={true}
              to='/'
              activeClassName='active'
              className={classes.menuItem}
            >
              Pelit
            </NavLink>
          </List.Item>
          {/* Jos käyttäjä on kirjautunut sisään, näytä "Saldo" */}
          {props.loggedIn ? (
            <List.Item className={classes.balanceItem}>
              <Image
                src={addBalanceIcon}
                alt='Add balance'
                className={classes.addBalanceIcon}
                onClick={() => props.addBalance()}
              />
              <List.Content className={classes.balanceContent}>
                <NavLink
                  to='/saldo'
                  activeClassName='active'
                  className={classes.menuItemBalance}
                >
                  Saldo:&nbsp;
                </NavLink>
                <NavLink
                  to='/saldo'
                  activeClassName='active'
                  className={`${classes.balanceAmount} ${classes.balanceItem}`}
                >
                  {props.balanceValue.toFixed(2)}
                  {props.currency}
                </NavLink>
              </List.Content>
            </List.Item>
          ) : null}
          {/* Jos käyttäjä ei ole kirjautunut sisään, näytä "Luo tunnus" */}
          {!props.loggedIn ? (
            <List.Item>
              <NavLink
                to='/luotunnus'
                activeClassName='active'
                className={classes.menuItem}
              >
                Luo tunnus
              </NavLink>
            </List.Item>
          ) : null}
          {/* Jos käyttäjä on kirjautunut sisään, näytä "Kirjaudu ulos" */}
          {props.loggedIn ? (
            <List.Item>
              <NavLink
                to='/kirjauduulos'
                activeClassName='active'
                className={classes.menuItem}
              >
                Kirjaudu ulos
              </NavLink>
            </List.Item>
          ) : (
            <List.Item>
              <NavLink
                to='/kirjaudu'
                activeClassName='active'
                className={classes.menuItem}
              >
                Kirjaudu
              </NavLink>
            </List.Item>
          )}
        </List>
      )}
    </div>
  );
};

export default MainNav;
