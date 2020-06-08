import React, { Fragment } from 'react';
import classes from './HomeNav.module.css';
import { Image, List } from 'semantic-ui-react';
import homePageIcon from '../../../ikonit/koti.svg';
import offeringsIcon from '../../../ikonit/tarjoukset.svg';

const HomeNav = (props) => {
  // TODO: Listan itemin animointi sivulle
  // https://react.semantic-ui.com/elements/list/#variations-selection

  return (
    <div className={classes.homeNav}>
      {/* Onko kyseessä admin vai tavallinen käyttäjä */}
      {props.admin ? (
        <List selection verticalAlign='middle' className={classes.menu}>
          <List.Item>
            <List.Content>
              <List.Header>Hallitse pelejä</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Käyttäjät</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Mainosasetukset</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Teema-asetukset</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Kampanjat</List.Header>
            </List.Content>
          </List.Item>
        </List>
      ) : (
        <List selection verticalAlign='middle' className={classes.menu}>
          <List.Item>
            <Image src={homePageIcon} className={classes.icon} />
            <List.Content>
              <List.Header>Kotisivu</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image src={offeringsIcon} className={classes.icon} />
            <List.Content>
              <List.Header>Tarjoukset</List.Header>
            </List.Content>
          </List.Item>
        </List>
      )}
    </div>
  );
};

export default HomeNav;
