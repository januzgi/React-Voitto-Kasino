import React from 'react';
import classes from './AdminPage.module.css';
import { Dropdown, Button } from 'semantic-ui-react';

const gameTypes = [
  { key: 1, text: 'Hedelmäpelit', value: 'Hedelmäpelit' },
  { key: 2, text: 'Uutuudet', value: 'Uutuudet' },
  { key: 3, text: 'Jackpotit', value: 'Jackpotit' },
  { key: 4, text: 'Pöytäpelit', value: 'Pöytäpelit' },
];

const currency = [
  { key: 1, text: '€', value: '€' },
  { key: 2, text: '£', value: '£' },
  { key: 3, text: '$', value: '$' },
  { key: 4, text: '¥', value: '¥' },
];

const winPercent = [
  { key: 1, text: '10', value: '10' },
  { key: 2, text: '20', value: '20' },
  { key: 3, text: '30', value: '30' },
  { key: 4, text: '40', value: '40' },
  { key: 5, text: '50', value: '50' },
];

const maxWin = [
  { key: 1, text: '100', value: '100' },
  { key: 2, text: '200', value: '200' },
  { key: 3, text: '300', value: '300' },
  { key: 4, text: '400', value: '400' },
  { key: 5, text: '500', value: '500' },
];

const minWin = [
  { key: 1, text: '10', value: '10' },
  { key: 2, text: '20', value: '20' },
  { key: 3, text: '30', value: '30' },
  { key: 4, text: '40', value: '40' },
  { key: 5, text: '50', value: '50' },
];

const maxStake = [
  { key: 1, text: '100', value: '100' },
  { key: 2, text: '200', value: '200' },
  { key: 3, text: '300', value: '300' },
  { key: 4, text: '400', value: '400' },
  { key: 5, text: '500', value: '500' },
];

const minStake = [
  { key: 1, text: '10', value: '10' },
  { key: 2, text: '20', value: '20' },
  { key: 3, text: '30', value: '30' },
  { key: 4, text: '40', value: '40' },
  { key: 5, text: '50', value: '50' },
];

export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      count: 0,
      price: 0,
    };
  }

  onChange = (event) => {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  };

  onSubmit = (event) => {
    event.preventDefault();
    let item = {
      type: this.state.type,
      count: this.state.count,
      price: this.state.price,
    };
    this.props.addToList(item);
    this.setState({
      type: '',
      count: 0,
      price: 0,
    });
  };

  render() {
    return (
      <form>
        <div className={classes.adminPage}>
          <div className={classes.adminGameRow}>
            <input
              className={classes.adminPageInput}
              type='text'
              placeholder='Pelin nimi'
              name='gameName'
              onChange={this.handleChange}
            />
          </div>
          <div className={classes.adminGameRow}>
            <Dropdown
              className={classes.adminPageDropWide}
              search
              onSearchChange={this.handleDropdownChange}
              name='gameTypes'
              selection
              wrapSelection={false}
              onChange={this.handleDropdownChange}
              options={gameTypes}
              placeholder='Pelin tyyppi'
            />
            <Dropdown
              className={classes.adminPageDropWide}
              search
              onSearchChange={this.handleDropdownChange}
              name='currency'
              selection
              wrapSelection={false}
              onChange={this.handleDropdownChange}
              options={currency}
              placeholder='Rahayksikkö'
            />
          </div>
          <div className={classes.adminGameRow}>
            <Dropdown
              className={classes.adminPageDrop}
              search
              onSearchChange={this.handleDropdownChange}
              name='winPercent'
              selection
              wrapSelection={false}
              onChange={this.handleDropdownChange}
              options={winPercent}
              placeholder='Palatus %'
            />
            <Dropdown
              className={classes.adminPageDrop}
              search
              onSearchChange={this.handleDropdownChange}
              name='maxWin'
              selection
              wrapSelection={false}
              onChange={this.handleDropdownChange}
              options={maxWin}
              placeholder='Max voitto'
            />
            <Dropdown
              className={classes.adminPageDrop}
              search
              onSearchChange={this.handleDropdownChange}
              name='minWin'
              selection
              wrapSelection={false}
              onChange={this.handleDropdownChange}
              options={minWin}
              placeholder='Min voitto'
            />
          </div>
          <div className={classes.adminGameRow}>
            <Dropdown
              className={classes.adminPageDrop}
              search
              onSearchChange={this.handleDropdownChange}
              name='maxStake'
              selection
              wrapSelection={false}
              onChange={this.handleDropdownChange}
              options={maxStake}
              placeholder='Max panos'
            />
            <Dropdown
              className={classes.adminPageDrop}
              search
              onSearchChange={this.handleDropdownChange}
              name='minStake'
              selection
              wrapSelection={false}
              onChange={this.handleDropdownChange}
              options={minStake}
              placeholder='Min Panos'
            />
          </div>
          <div className={classes.adminGameRow}>
            <Button
              className={classes.adminPageButton}
              color='green'
              style={{
                marginLeft: '130px',
                marginTop: '20px',
                marginBottom: '20px',
              }}
              onClick={this.editItem}
            >
              Lisää peli
            </Button>
          </div>
        </div>
      </form>
    );
  }
}
