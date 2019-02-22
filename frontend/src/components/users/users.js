import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NewUser from './newuser';
import LoginUser from './loginuser';

class Users extends React.Component {
  state = { users: [] }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then((users) => {
        let data = users.data;
        this.setState({ users: data })}
      );
  }



  renderUser = (props) => {
    const { name } = props.match.params;
    let selectedUser = "";

    this.state.users.forEach((user) => {
      if (user.username === name) {
        selectedUser = user;
      }
    })

    
  }

  render() {
    return (
      <div className="App">
        
        <Route path='/users/new' component={ NewUser } />
        <Route path='/users/login' component={ LoginUser } />
        <Route path='/users/:name/edit' render={ this.renderUser } />
      </div>
    );
  }
}

export default Users;