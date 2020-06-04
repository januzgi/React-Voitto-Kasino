import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import classes from './NewUser.module.css';

export default class NewUser extends React.Component {
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
    let style = {
      width: 600,
      margin: 'auto',
    };
    return (
      <div style={style}>
        <div className={classes.uniqueSellingPoints}>
          Miksi kannattaa pelata meillä
        </div>
        <h2>Luo tunnus</h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label htmlFor='type'>Sähköposti:</label>
            <input
              type='text'
              name='type'
              required={true}
              onChange={this.onChange}
              value={this.state.type}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='count'>Salasana:</label>
            <input
              type='text'
              name='count'
              required={true}
              onChange={this.onChange}
              value={this.state.count}
            />
          </Form.Field>
          <Button type='submit'>Luo tili</Button>
        </Form>
      </div>
    );
  }
}
