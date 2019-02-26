import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { NavBar } from './components/NavBar';
// import { Feed } from './components/Feed'
import './App.css';
import Users from './components/users/users'
import axios from "axios";
// import AuthForm from "./login/AuthForm";
import Auth from "./utils/auth";
// import PrivateRoute from "./utils/AuthRouting";

class App extends Component {
  state = {
    isLoggedIn: false,
    user: ""
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.checkAuthenticateStatus();
  }

  checkAuthenticateStatus = () => {
    axios.get("/users/isLoggedIn").then(user => {
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
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <nav className="nav">
            <Link to='/users/new'> Register </Link> {"  "}
            <Link to='/users/login'> Log In </Link>
            <Link to='/users/logout'> Log out </Link>
          </nav>

          <Route exact path="/" component={this.homepage} />
          <Route path='/users' component={Users} />
          <Route path='/dashboard/user' component={NavBar} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
