import React from "react";
import { DOMAIN } from "./config/index";
import axios from "axios";
import { getCookie } from "./services/utils/get-cookie";

export default class PostsInput extends React.Component {
  state = {
    body: "",
  };

  handleChange = (event) => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const post = {
      body: this.state.body,
    };

    axios
      .post(
        `${DOMAIN}/api/posts/`,
        { post },
        {
          headers: {
            Authorization: `Token ${getCookie("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <center>
          <h1>Create Post</h1>
        </center>
        <form onSubmit={this.handleSubmit}>
          <center>
            <div className="textarea">
              <label>Text</label>
              <textarea
                onChange={this.handleChange}
                body="text"
                className="textarea"
                id="textarea"
                row="10"
                col="50"
              />
            </div>
          </center>
          <center>
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </center>
        </form>
      </div>
    );
  }
}
