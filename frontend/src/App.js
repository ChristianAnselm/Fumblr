import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { NavBar } from './components/NavBar';
// import { Feed } from './components/Feed'
import './App.css';
import Users from './components/users/users'

class App extends Component {
  homepage = () => {
    return (
      <h1> login </h1>
    )
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        
        <nav>
          <Link to='/users/new'> New User </Link> {"  "}
          <Link to='/users/login'> Log In User </Link>

        <Route exact path="/" component={this.homepage} />
        <Route path='/users' component={Users} />    
        </nav>
      </div> 
      </BrowserRouter>
    );
  }
}

export default App;
