import React, { Component } from 'react';
import { NavBar } from './NavBar';
import { withRouter } from 'react-router';
import axios from 'axios';
import "../css/Feed.css"


const Feed = () => {
  return (
    <div className="feed">
      <NavBar />
    </div>
  )
}

export default withRouter(Feed)