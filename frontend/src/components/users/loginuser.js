import React from "react";
import axios from "axios";
import Auth from "../../utils/auth"
import { Redirect } from 'react-router-dom';


class LoginUser extends React.Component {
  state = { usernameInput: "", passwordInput: "", message: "", isLoggedIn: false };

  handleUsernameChange = e => {
    this.setState({
      usernameInput: e.target.value
    });
  };

  handlePasswordChange = e => {
    this.setState({
      passwordInput: e.target.value
    });
  };

  checkAuthenticateStatus = () => {
    axios.get("/users/isLoggedIn").then(user => {
      if (user.data.username === Auth.getToken()) {
        console.log("logged in");
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

  submitForm = e => {
    e.preventDefault();
    const { usernameInput, passwordInput } = this.state;

    if (usernameInput.length < 3) {
      this.setState({
        message: "Username length must be at least 3"
      });
      return;
    }
    axios
      .post("/users/login", {
        username: this.state.usernameInput,
        password: this.state.passwordInput
      })
      .then(res => {
        Auth.authenticateUser(usernameInput);
        this.setState({ usernameInput: "", passwordInput: "", message: "Logged In" });
      })
      .then(() => {
        this.checkAuthenticateStatus();
      })
      .catch(err => {
        this.setState({ usernameInput: "", passwordInput: "", message: "Error logging in" });
      });
  };

  render() {
    console.log(this.state.isLoggedIn);

    const { usernameInput, passwordInput, message, isLoggedIn } = this.state;

    if (this.state.isLoggedIn) {
      return <Redirect to="/dashboard" />
    }
    return (
      <div className="login">
        <h1> Log In </h1>
        <form onSubmit={this.submitForm}>
          <label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={usernameInput}
              onChange={this.handleUsernameChange}
            />
          </label>

          <br></br>

          <label>
            <input
              type="password"
              placeholder="Password"
              name="username"
              value={passwordInput}
              onChange={this.handlePasswordChange}
            />
          </label>
          <br></br>
          <input
            Login Here
            className="button"
            type="submit" value="Submit"
          />
        </form>
        <p>{message}</p>
      </div>
    );
  }
}

export default LoginUser;