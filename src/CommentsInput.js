import React from "react";
import { DOMAIN } from "./config/index";
import axios from "axios";
import { getCookie } from "./services/utils/get-cookie";

export default class CommentsInput extends React.Component {
  state = {
    body: "",
  };

  getPostID = async () => {
    const info = await axios.get(`${DOMAIN}/api/posts/`, {
      headers: {
        Authorization: `Token ${getCookie("token")}`,
      },
    });
    return info.data.id;
  };

  handleChange = (event) => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const post = {
      body: this.state.body,
    };

    let id = this.getPostID;

    axios
      .post(
        `${DOMAIN}/api/posts/${id}/comment/`,
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
                col="100"
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
