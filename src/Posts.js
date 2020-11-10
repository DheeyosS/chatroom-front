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
        <center><h1>All Posts</h1></center>
        <div 
          style={{
            display: "flex",
            flexDirection: "column",
            height: "80vh"
          }}
        >
        <div>
        <center><h1>Create Post</h1></center>
        <form onSubmit={this.savePost}>
          <center><div className="textarea">
            <label>Text</label>
            <textarea
              onChange={this.handleDescriptionChange}
              type="text"
              className="textarea"
              id="textarea"
              row="10"
              col="50"
            />
          </div></center>
          <center><button type="submit" className="btn btn-primary">
            Post
          </button></center>
        </form>
        </div>
        <div><div><ul className="postlist">
          {this.state.posts.map((post, i) => (
            <li className="border border-primary text-left" key={post.id}>
              <label className="font-weight-bold">{`${post.username}:`}</label>
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
        </ul></div></div>
        </div>
      </div>
    );
  }
}

export default Posts;
