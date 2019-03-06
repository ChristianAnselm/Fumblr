import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom"

class NewUser extends React.Component {
  state = {
    usernameInput: "",
    passwordInput: "",
    message: ""
  };

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
    const {
      usernameInput,
      passwordInput
    } = this.state;

    if (usernameInput.length < 3) {
      this.setState({
        message: "Username length must be at least 3"
      });
      return;
    }
    axios
      .post("/users/signup", {
        username: this.state.usernameInput,
        password: this.state.passwordInput
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: "Signup Succesful!"
        });
      })
      .catch(err => {
        console.log("error: ", err);
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: ""
        });
      });
  };

  render() {
    if (this.state.message) {
      return <Redirect to="/dashboard" />
    }
    const {
      usernameInput,
      passwordInput,
      message
    } = this.state;
    return (
      <div>

        <form className="signup" onSubmit={this.submitForm}> <label>
          <h1 > Sign Up! </h1>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={usernameInput}
            onChange={this.handleUsernameChange} /> </label>

          <label>
            <input
              type="password"
              placeholder="Password"
              name="username"
              value={passwordInput} onChange={this.handlePasswordChange} /> </label>

          <input
            className="button"
            type="submit" value="Submit"
          />
        </form> <p> {message} </p>

      </div>
    );
  }
}

export default NewUser;