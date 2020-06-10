import React from 'react';
import classes from '../HomeNav/HomeNav.module.css';
import { Image, List } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import slotsIcon from '../../../ikonit/hedelmäpelit.svg';
import freshGamesIcon from '../../../ikonit/uutuudet.svg';
import jackpotsIcon from '../../../ikonit/jackpotit.svg';
import tableGamesIcon from '../../../ikonit/pöytäpelit.svg';

// Käyttää HomeNav css moduulia
const GameNav = (props) => {
  return (
    <div className={classes.homeNav}>
      {/* Onko kyseessä admin vai tavallinen käyttäjä */}
      {props.admin ? null : (
        <List selection verticalAlign='middle'>
          <List.Item className={classes.listItem}>
            <Image src={slotsIcon} className={classes.icon} />
            <List.Content className={classes.contentItem}>
              <NavLink
                to='/pelit/hedelmapelit'
                activeClassName='active'
                className={classes.headerText}
              >
                Hedelmäpelit
              </NavLink>
            </List.Content>
          </List.Item>
          <List.Item className={classes.listItem}>
            <Image src={freshGamesIcon} className={classes.icon} />
            <List.Content className={classes.contentItem}>
              <NavLink
                to='/pelit/uutuudet'
                activeClassName='active'
                className={classes.headerText}
              >
                Uutuudet
              </NavLink>
            </List.Content>
          </List.Item>
          <List.Item className={classes.listItem}>
            <Image src={jackpotsIcon} className={classes.icon} />
            <List.Content className={classes.contentItem}>
              <NavLink
                to='/pelit/jackpotit'
                activeClassName='active'
                className={classes.headerText}
              >
                Jackpotit
              </NavLink>
            </List.Content>
          </List.Item>
          <List.Item className={classes.listItem}>
            <Image src={tableGamesIcon} className={classes.icon} />
            <List.Content className={classes.contentItem}>
              <NavLink
                to='/pelit/poytapelit'
                activeClassName='active'
                className={classes.headerText}
              >
                Pöytäpelit
              </NavLink>
            </List.Content>
          </List.Item>
        </List>
      )}
    </div>
  );
};

export default GameNav;
