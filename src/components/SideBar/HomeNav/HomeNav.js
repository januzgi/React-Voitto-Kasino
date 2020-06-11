import React from 'react';
import classes from './HomeNav.module.css';
import { Image, List } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import homePageIcon from '../../../ikonit/koti.svg';
import offeringsIcon from '../../../ikonit/tarjoukset.svg';

const HomeNav = (props) => {
  return (
    <div className={classes.homeNav}>
      {/* Onko kyseessä admin vai tavallinen käyttäjä */}
      {props.admin ? (
        <List selection verticalAlign='middle'>
          <List.Item className={classes.listItem}>
            <Image src={homePageIcon} className={classes.icon} />
            <List.Content className={classes.contentItem}>
              <NavLink
                to='/hallitse'
                activeClassName='active'
                className={classes.headerText}
              >
                Hallitse pelejä
              </NavLink>
            </List.Content>
          </List.Item>
          <List.Item className={classes.listItem}>
            <Image src={homePageIcon} className={classes.icon} />
            <List.Content className={classes.contentItem}>
              <NavLink
                to='/kayttajat'
                activeClassName='active'
                className={classes.headerText}
              >
                Käyttäjät
              </NavLink>
            </List.Content>
          </List.Item>
          <List.Item className={classes.listItem}>
            <Image src={homePageIcon} className={classes.icon} />
            <List.Content className={classes.contentItem}>
              <NavLink
                to='/mainosasetukset'
                activeClassName='active'
                className={classes.headerText}
              >
                Mainosasetukset
              </NavLink>
            </List.Content>
          </List.Item>
          <List.Item className={classes.listItem}>
            <Image src={homePageIcon} className={classes.icon} />
            <List.Content className={classes.contentItem}>
              <NavLink
                to='/teema-asetukset'
                activeClassName='active'
                className={classes.headerText}
              >
                Teema-asetukset
              </NavLink>
            </List.Content>
          </List.Item>
          <List.Item className={classes.listItem}>
            <Image src={homePageIcon} className={classes.icon} />
            <List.Content className={classes.contentItem}>
              <NavLink
                to='/kampanjat'
                activeClassName='active'
                className={classes.headerText}
              >
                Kampanjat
              </NavLink>
            </List.Content>
          </List.Item>
        </List>
      ) : (
        <List selection verticalAlign='middle'>
          <List.Item className={classes.listItem}>
            <Image src={homePageIcon} className={classes.icon} />
            <List.Content className={classes.contentItem}>
              <NavLink
                exact={true}
                to='/'
                activeClassName='active'
                className={classes.headerText}
              >
                Kotisivu
              </NavLink>
            </List.Content>
          </List.Item>
          <List.Item className={classes.listItem}>
            <Image src={offeringsIcon} className={classes.icon} />
            <List.Content className={classes.contentItem}>
              <NavLink
                to='/tarjoukset'
                activeClassName='active'
                className={classes.headerText}
              >
                Tarjoukset
              </NavLink>
            </List.Content>
          </List.Item>
        </List>
      )}
    </div>
  );
};

export default HomeNav;
