import { Component } from 'react';
// import { NavBar } from './NavBar';
import { withRouter } from 'react-router';
import axios from 'axios';
import "../css/Feed.css"


class DisplayFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allPosts: []
    }
  }
  componentDidMount() {
    this.getPosts()
  }

  getPosts = () => {
    axios.get('http://localhost:3100/dashboard/')
      .then(res => {
        this.setState({
          allPosts: res.data
        })
      })
      .catch(err => console.log(err))
  }
}

export default withRouter(DisplayFeed)