import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/posts/", {
        headers: {
          Authorization: `Token 311067c9572651952f190bd870aa2bc2cd55864c`,
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ posts: res.data });
      });
  }
  render() {
    return (
      <div>
        <h1>All Posts</h1>
        <ul className="postlist">
          {this.state.posts.map((post, i) => (
            <li key={post.id}>
              {post.username}
              <br />
              {post.text}
              <br />
              <ul className="commentlist">
                {post.comments.map((comment, j) => (
                  <li>
                    {" "}
                    {comment.username}
                    <br />
                    {comment.text}{" "}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
