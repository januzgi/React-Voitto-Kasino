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
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import classes from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isAdmin: true,
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
    this.props.history.push('/saldo');
  };

  // Kirjaudu ulos
  logOut = () => {
    this.setState({
      isAdmin: false,
      loggedIn: false,
    });
    // Ohjaa takaisin etusivulle
    this.props.history.push('/');
  };

  createNewUser = (newUserData) => {
    // Onko tämä ensimmäinen uusi käyttäjä
    if (this.state.users.length === 0) {
      // Ensimmäinen käyttäjä on admin
      console.log(newUserData);
      // let admin = []
      // this.setState({
      //   users:
      // })
    }

    alert('Tervetuloa Kasinolle ' + newUserData.email + '!');

    // Siirry etusivulle
    this.props.history.push('/');
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
        <Switch>
          <Route
            path='/pelit'
            render={() => (
              <div className={classes.homePage}>
                <div className={classes.sideWrapper}>
                  <SideBar admin={this.state.isAdmin} />
                </div>
                <div className={classes.contentWrapper}>
                  <OrganizerTab />
                  <GameTiles />
                </div>
                <ChatBox />
              </div>
            )}
          />
          <Route
            exact
            path='/tarjoukset'
            render={() => (
              <div className={classes.homePage}>
                <div className={classes.sideWrapper}>
                  <SideBar admin={this.state.isAdmin} />
                </div>
              </div>
            )}
          />
          <Route
            path='/luotunnus'
            render={() => (
              <NewUser
                addToList={this.addToList}
                createNewUser={this.createNewUser}
              />
            )}
          />
          <Route path='/saldo' render={() => <Balance />} />
          <Route path='/kirjaudu' render={() => <Login />} />
          <Route
            path='/admin'
            render={() =>
              this.state.isAdmin ? (
                <div className={classes.homePage}>
                  <div className={classes.sideWrapper}>
                    <SideBar
                      admin={this.state.isAdmin}
                      loggedIn={this.state.loggedIn}
                    />
                  </div>
                  <div className={classes.contentWrapper}>
                    <AdminPage
                      loggedIn={this.state.loggedIn}
                      admin={this.state.isAdmin}
                    />
                  </div>
                </div>
              ) : (
                <Redirect to='/' />
              )
            }
          />
          <Route
            path='/kirjauduulos'
            render={() =>
              // Tarkista onko käyttäjä kirjautuneena sisään
              this.state.loggedIn ? (
                <div className={classes.homePage}>
                  <Logout logout={() => this.logOut()} />
                </div>
              ) : (
                <Redirect to='/' />
              )
            }
          />
          {/* TODO: Logout:sta Redirect kotisivulle */}
          {/* <Redirect to="/"></Redirect> */}
          <Route
            exact
            path='/'
            render={() => (
              <div className={classes.homePage}>
                <div className={classes.sideWrapper}>
                  <SideBar
                    admin={this.state.isAdmin}
                    loggedIn={this.state.loggedIn}
                  />
                </div>
                <div className={classes.contentWrapper}>
                  <OrganizerTab />
                  <GameTiles />
                </div>
                <ChatBox />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
