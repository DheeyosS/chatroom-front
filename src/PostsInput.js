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

    const { body } = this.state;
    const { callback } = this.props;

    axios
      .post(
        `${DOMAIN}/api/posts/`,
        { text: body },
        {
          headers: {
            Authorization: `Token ${getCookie("token")}`,
          },
        }
      )
      .then((res) => {
        callback();
        console.log(res);
        console.log(res.data);
      });
    this.setState({ body: "" });
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
              <textarea
                onChange={this.handleChange}
                body="text"
                className="textarea"
                id="textarea"
                row="10"
                col="50"
                value={this.state.body}
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
