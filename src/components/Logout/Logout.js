import React from 'react';
import classes from './Logout.module.css';
import { Button } from 'semantic-ui-react';

const Logout = (props) => {
  return (
    <div className={classes.logout}>
      <h1>Haluatko kirjautua ulos?</h1>
      <Button className={classes.logoutButton} onClick={props.logout}>
        Kirjaudu ulos
      </Button>
    </div>
  );
};

export default Logout;
