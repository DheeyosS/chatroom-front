import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    state = {
        posts: [],
    };

    componentDidMount(){
        axios.get("http://127.0.0.1:8000/api/posts").then(res =>{
           console.log(res.data);
           this.setState({posts: res.data}); 
        }); 
    }
  render() {
    return (
      <div className="App">
        <h1>All Posts</h1>
        <ul>
          {this.state.posts.map((post,i) => <li key={'${post.id} ${i}'}>{post.text}</li>)}
        </ul> 
      </div>
    )
  }
}

export default Posts