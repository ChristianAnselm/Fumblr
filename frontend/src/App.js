import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'
import './App.css';
import axios from "axios";
import Auth from "./utils/auth";
import { LandingPage } from './components/LandingPage';
import LoginUser from './components/users/loginuser';
import NewUser from './components/users/newuser';
import Feed from './components/Feed';

class App extends Component {
  state = {
    isLoggedIn: false,
    user: "",
    allPosts: []
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.checkAuthenticateStatus();
  }

  checkAuthenticateStatus = () => {
    axios.get("/users/isLoggedIn").then(user => {
      console.log(user);

      if (user.data.username === Auth.getToken()) {
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          username: Auth.getToken()
        });
      } else {
        if (user.data.username) {
          this.logoutUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    });
  };

  logoutUser = () => {
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });
    return (
      <h1>You have succesfully logged out</h1>
    )
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/users/logout" component={this.logoutUser} />
          <Route path="/users/login" component={LoginUser} />
          <Route path="/users/new" component={NewUser} />
          <Route path='/dashboard' component={Feed} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
