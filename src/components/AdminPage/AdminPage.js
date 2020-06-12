import React from 'react';
import classes from './AdminPage.module.css';

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
    return <div className={classes.adminPage}>adminsivut</div>;
  }
  
}
