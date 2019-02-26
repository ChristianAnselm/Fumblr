import React from "react";
import axios from "axios";
import Auth from "../../utils/auth"
// import AuthForm from "../../utils/AuthForm"

class LoginUser extends React.Component {
  state = { usernameInput: "", passwordInput: "", message: "" };

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
        debugger
        // })
        // .then(() => {
        //   Auth.checkAuthenticateStatus();
      })
      .catch(err => {
        this.setState({ usernameInput: "", passwordInput: "", message: "Error logging in" });
        debugger
      });
  };

  render() {
    const { usernameInput, passwordInput, message } = this.state;
    return (
      <div className="login">
        <h1> Log In </h1>

        <form onSubmit={this.submitForm}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={usernameInput}
              onChange={this.handleUsernameChange}
            />
          </label>

          <br></br>

          <label>
            Password:
            <input
              type="password"
              name="username"
              value={passwordInput}
              onChange={this.handlePasswordChange}
            />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
        <p>{message}</p>
      </div>
    );
  }
}

export default LoginUser;