import React, { Fragment } from 'react';
import { Form, Button } from 'semantic-ui-react';
import classes from './NewUser.module.css';
import { Dropdown } from 'semantic-ui-react';

export default class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      streetadress: '',
      postoffice: '',
      postalcode: '',
      phone: '',
    };
  }

  // Tallenna muutoksia stateen käyttäjän syöttäessä tietoja
  onChange = (event) => {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  };

  // Kun käyttäjä luo tilin
  onSubmit = (event) => {
    event.preventDefault();

    let newUserData = {
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      streetadress: this.state.streetadress,
      postoffice: this.state.postoffice,
      postalcode: this.state.postalcode,
      phone: this.state.phone,
    };
    // Lisää käyttäjä App.js:ssä
    this.props.createNewUser(newUserData);

    this.setState({
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      streetadress: '',
      postoffice: '',
      postalcode: '',
      phone: '',
    });
  };

  render() {
    const dayOfBirthOptions = [
      { key: 1, text: 18, value: 18 },
      { key: 2, text: 19, value: 19 },
      { key: 3, text: 20, value: 20 },
      { key: 4, text: 21, value: 21 },
    ];

    const monthOfBirthOptions = [
      { key: 1, text: 'tammikuu', value: 1 },
      { key: 2, text: 'helmikuu', value: 2 },
      { key: 3, text: 'maaliskuu', value: 3 },
      { key: 4, text: 'huhtikuu', value: 4 },
    ];

    const yearOfBirthOptions = [
      { key: 1, text: 1990, value: 1990 },
      { key: 2, text: 1991, value: 1991 },
      { key: 3, text: 1992, value: 1992 },
      { key: 4, text: 1993, value: 1993 },
    ];

    const countriesOptions = [
      { key: 1, text: 'Suomi', value: 'FI' },
      { key: 2, text: 'Ruotsi', value: 'SWE' },
      { key: 3, text: 'Norja', value: 'NOR' },
    ];

    const currencyOptions = [
      { key: 1, text: '€', value: 'EUR' },
      { key: 2, text: '$', value: 'USD' },
      { key: 3, text: '£', value: 'GBP' },
    ];

    const phonePrefixOptions = [
      { key: 1, text: '+358', value: 'FI' },
      { key: 2, text: '+666', value: 'SWE' },
      { key: 3, text: '+391', value: 'NOR' },
    ];

    return (
      <Fragment>
        <div className={classes.uniqueSellingPoints}>
          Miksi kannattaa pelata meillä
        </div>
        <div className={classes.newUserContainer}>
          <h1 className={classes.formHeading}>Luo tunnus</h1>
          <p className={classes.obligatoryInformation}>Pakolliset tiedot *</p>
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <input
                placeholder='Sähköposti *'
                className={classes.newUserInput}
                type='text'
                name='email'
                required={true}
                onChange={this.onChange}
                value={this.state.email}
              />
            </Form.Field>
            <Form.Field>
              <input
                placeholder='Salasana *'
                className={classes.newUserInput}
                type='password'
                name='password'
                required={true}
                onChange={this.onChange}
                value={this.state.password}
              />
            </Form.Field>
            <h2 className={classes.formSubHeading}>Henkilötiedot</h2>
            <div className={`${classes.fieldsContainer} ${'inline fields'}`}>
              <Form.Field>
                <input
                  placeholder='Etunimi *'
                  className={classes.newUserInput}
                  type='text'
                  name='firstname'
                  required={true}
                  onChange={this.onChange}
                  value={this.state.firstname}
                />
              </Form.Field>
              <Form.Field>
                <input
                  placeholder='Sukunimi *'
                  className={classes.newUserInput}
                  type='text'
                  name='lastname'
                  required={true}
                  onChange={this.onChange}
                  value={this.state.lastname}
                />
              </Form.Field>
            </div>
            <p className={classes.obligatoryInformation}>Syntymäaika *</p>
            <div className={`${classes.fieldsContainer} ${'inline fields'}`}>
              <Form.Field>
                <Dropdown
                  required={true}
                  placeholder='päivä'
                  selection
                  options={dayOfBirthOptions}
                />
              </Form.Field>
              <Form.Field>
                <Dropdown
                  required={true}
                  placeholder='kuukausi'
                  selection
                  options={monthOfBirthOptions}
                />
              </Form.Field>
              <Form.Field>
                <Dropdown
                  required={true}
                  placeholder='vuosi'
                  selection
                  options={yearOfBirthOptions}
                />
              </Form.Field>
            </div>
            <p className={classes.obligatoryInformation}>Osoitetiedot *</p>
            <Form.Field>
              <input
                placeholder='Katuosoite *'
                className={classes.newUserInput}
                type='text'
                name='streetadress'
                required={true}
                onChange={this.onChange}
                value={this.state.streetadress}
              />
            </Form.Field>
            <div className={`${classes.fieldsContainer} ${'inline fields'}`}>
              <Form.Field>
                <input
                  placeholder='Postitoimipaikka *'
                  className={classes.newUserInput}
                  type='text'
                  name='postoffice'
                  required={true}
                  onChange={this.onChange}
                  value={this.state.postoffice}
                />
              </Form.Field>
              <Form.Field>
                <input
                  placeholder='Postinumero *'
                  className={classes.newUserInput}
                  type='text'
                  name='postalcode'
                  required={true}
                  onChange={this.onChange}
                  value={this.state.postalcode}
                />
              </Form.Field>
            </div>
            <p className={classes.obligatoryInformation}>Maa *</p>
            <div className={`${classes.fieldsContainer} ${'inline fields'}`}>
              <Form.Field>
                <Dropdown
                  required={true}
                  placeholder='Suomi'
                  selection='Suomi'
                  options={countriesOptions}
                />
              </Form.Field>
            </div>
            <p className={classes.obligatoryInformation}>Valuutta *</p>
            <div className={`${classes.fieldsContainer} ${'inline fields'}`}>
              <Form.Field>
                <Dropdown
                  required={true}
                  placeholder='€'
                  selection='€'
                  options={currencyOptions}
                />
              </Form.Field>
            </div>
            <p className={classes.obligatoryInformation}>Maakoodi *</p>
            <div className={`${classes.fieldsContainer} ${'inline fields'}`}>
              <Form.Field>
                <Dropdown
                  required={true}
                  placeholder='+358'
                  selection='+358'
                  options={phonePrefixOptions}
                />
              </Form.Field>
              <Form.Field>
                <input
                  placeholder='Puhelinnumero *'
                  className={classes.newUserInput}
                  type='text'
                  name='phone'
                  required={true}
                  onChange={this.onChange}
                  value={this.state.phone}
                />
              </Form.Field>
            </div>
            <Button type='submit' className={classes.createUserButton}>
              Luo tili
            </Button>
          </Form>
        </div>
      </Fragment>
    );
  }
}
