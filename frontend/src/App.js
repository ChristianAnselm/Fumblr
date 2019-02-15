import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Feed } from './components/Feed'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route component={NavBar} />
        
        <Route exact path="/" component={Feed} />
        
      
    
      </div> 
      </BrowserRouter>
    );
  }
}

export default App;
