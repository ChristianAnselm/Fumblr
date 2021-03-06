import React, { Component } from "react";
import axios from "axios";
// import { withRouter } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "../utils/auth";
import Form from "./Form";

class AuthForm extends Component {
    state = {
        username: "",
        password: "",
        isLoggedIn: false
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    registerUser = async e => {
        e.preventDefault();
        const { username, password } = this.state;

        await axios.post("/users/new", { username, password });

        Auth.authenticateUser(username);

        await axios.post("/users/login", { username, password });

        await this.props.checkAuthenticateStatus();

        this.setState({
            username: "",
            password: ""
        });
        axios.post("/users/new", { username, password }).then(() => {
            Auth.authenticateUser(username);
            axios
                .post("/users/login", { username, password })
                .then(() => {
                    this.props.checkAuthenticateStatus();
                })
                .then(() => {
                    this.setState({
                        username: "",
                        password: ""
                    });
                });
        });
    };

    loginUser = e => {
        debugger
        e.preventDefault();
        const { username, password } = this.state;

        axios
            .post("/users/login", { username, password })
            .then(() => {
                debugger
                Auth.authenticateUser(username);
            })
            .then(() => {
                this.props.checkAuthenticateStatus();
            })
            .then(() => {
                this.setState({
                    username: "",
                    password: "",
                    isLoggedIn: {!isLoggedIn
                }
                });
    });
};

render() {
    const { username, password } = this.state;
    const { isLoggedIn } = this.props;

    return (
        <Switch>
            <Route
                path="/auth/login"
                render={() => {
                    return (
                        <Form
                            username={username}
                            password={password}
                            isLoggedIn={isLoggedIn}
                            loginUser={this.loginUser}
                            registerUser={this.registerUser}
                            handleChange={this.handleChange}
                        />
                    );
                }}
            />
            <Route
                path="/auth/register"
                render={() => {
                    if (this.state.isLoggedIn) {
                        return <Redirect to='/dashboard/user' />
                    }
                    return (
                        <Form
                            username={username}
                            password={password}
                            isLoggedIn={isLoggedIn}
                            loginUser={this.loginUser}
                            registerUser={this.registerUser}
                            handleChange={this.handleChange}
                        />
                    );
                }}
            />
        </Switch>
    );
}
}

export default AuthForm;
