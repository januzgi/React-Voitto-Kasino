import React from 'react';
import AdminPage from './components/AdminPage/AdminPage';
import NewUser from './components/NewUser/NewUser';
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
import OrganizerTab from './components/OrganizerTab/OrganizerTab';
import GameTiles from './components/GameTiles/GameTiles';
import ChatBox from './components/ChatBox/ChatBox';
import Balance from './components/Balance/Balance';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import { Switch, Route, withRouter, useHistory } from 'react-router-dom';
import classes from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      id: 100,
      isAdmin: false,
      loggedIn: true,
      balanceValue: 0.0,
      currency: '€',
    };
  }

  addToList = (item) => {
    item.id = this.state.id;
    let tempList = this.state.list.concat(item);
    let tempId = this.state.id + 1;
    this.setState({
      list: tempList,
      id: tempId,
    });
    this.props.history.push('/');
  };

  removeFromList = (id) => {
    let tempId = parseInt(id, 10);
    let tempList = this.state.list.filter((item) => item.id !== tempId);
    this.setState({
      list: tempList,
    });
  };

  editItem = (item) => {
    let tempList = [];
    for (let i = 0; i < this.state.list.length; i++) {
      if (this.state.list[i].id !== item.id) {
        tempList.push(this.state.list[i]);
      } else {
        tempList.push(item);
      }
    }
    this.setState({
      list: tempList,
    });
  };

  // Lisää saldoa
  addBalance = () => {
    alert('Lisätään saldoa.');
  };

  render() {
    return (
      <div>
        <NavBar
          isAdmin={this.state.isAdmin}
          loggedIn={this.state.loggedIn}
          balanceValue={this.state.balanceValue}
          currency={this.state.currency}
          addBalance={this.addBalance}
        />
        <hr />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <div className={classes.HomePage}>
                <SideBar />
                <OrganizerTab />
                <GameTiles />
                <ChatBox />
              </div>
            )}
          />
          <Route
            path='/luotunnus'
            render={() => <NewUser addToList={this.addToList} />}
          />
          <Route path='/saldo' render={() => <Balance />} />
          <Route path='/kirjaudu' render={() => <Login />} />
          <Route path='/admin' render={() => <AdminPage />} />
          <Route path='/kirjauduulos' render={() => <Logout />} />
          {/* TODO: Logout:sta Redirect kotisivulle */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
