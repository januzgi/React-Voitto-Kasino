import React from 'react';
import classes from './AdminPage.module.css';
import { Dropdown } from 'semantic-ui-react';
import {Form,Button} from 'semantic-ui-react';

const options = [
  { key: 1, text: 'abc', value: 'abc' },
  { key: 2, text: 'def', value: 'def' },
  { key: 3, text: 'ghi', value: 'ghi' },
]

export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      count: 0,
      price: 0,
      options: "",
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
      options: this.state.options,
    };
    this.props.addToList(item);
    this.setState({
      type: '',
      count: 0,
      price: 0,
      options: "",
    });
  };

  render() {
		return(
        <form>
          <div className={classes.adminPage}>
            <h1 style={{ color: "darkblue", fontSize: "" }}>
              Search below to find facilities in your area.
            </h1>
            <div style={{ marginTop: "20px" }} className="ui big icon input">
              <Dropdown
                style={{ width: "150px" }}
                search
                onSearchChange={this.handleDropdownChange}
                name="options"
                selection
                wrapSelection={false}
                onChange={this.handleDropdownChange}
                options={options}
                placeholder="abc"
              />
              <input
                style={{ marginLeft: "10px", width: "100px" }}
                type="text"
                placeholder="57115"
                name="zipCode"
                onChange={this.handleChange}
              />
              <button
                style={{ marginLeft: "10px", width: "150px" }}
                className="ui facebook button"
              >
                Search
              </button>
            </div>
          </div>
        </form>
		)
	}
}
