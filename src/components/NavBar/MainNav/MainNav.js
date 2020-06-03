import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import classes from './MainNav.module.css';

// MainNav on oma komponenttinsa, sisältää NavBar:in päävalikon.
// Kirjautuneen käyttäjän mukaan (admin/tavallinen) näytetään eri MainNav
const MainNav = (props) => {
  //   TODO: dynaamisempi JSX:n luonti esim. objektin pohjalta

  return (
    <div>
      {props.loggedIn && props.isAdmin ? (
        <List>
          <List.Item>
            <Link to='/admin' className={classes.Admin}>
              Admin
            </Link>
          </List.Item>
          <List.Item>
            <Link to='/kirjauduulos' className={classes.MenuItem}>
              Kirjaudu ulos
            </Link>
          </List.Item>
        </List>
      ) : (
        <List>
          <List.Item>
            <Link to='/' className={classes.MenuItem}>
              Pelit
            </Link>
          </List.Item>
          {/* Jos käyttäjä on kirjautunut sisään */}
          {props.loggedIn ? (
            <List.Item>
              <Link to='/saldo' className={classes.MenuItem}>
                Saldo
              </Link>
            </List.Item>
          ) : null}
          <List.Item>
            <Link to='/luotunnus' className={classes.MenuItem}>
              Luo tunnus
            </Link>
          </List.Item>
          {/* Jos käyttäjä on kirjautunut sisään */}
          {props.loggedIn ? (
            <List.Item>
              <Link to='/kirjauduulos' className={classes.MenuItem}>
                Kirjaudu ulos
              </Link>
            </List.Item>
          ) : (
            <List.Item>
              <Link to='/kirjaudu' className={classes.MenuItem}>
                Kirjaudu
              </Link>
            </List.Item>
          )}
        </List>
      )}
    </div>
  );
};

export default MainNav;
