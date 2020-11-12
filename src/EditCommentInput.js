import React from "react";
import { DOMAIN } from "./config/index";
import axios from "axios";
import { getCookie } from "./services/utils/get-cookie";

export default class EditCommentInput extends React.Component {
  state = {
    body: "",
  };

  handleChange = (event) => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { commentId, callback } = this.props;
    const { body } = this.state;
    axios
      .post(
        `${DOMAIN}/api/comments/${commentId}/edit/`,
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
        <form onSubmit={this.handleSubmit}>
          <center>
            <div className="textarea">
              <label>Edit Comment</label>
              <textarea
                onChange={this.handleChange}
                body="text"
                className="textarea"
                id="textarea"
                row="10"
                col="100"
                value={this.state.body}
              />
            </div>
          </center>
          <center>
            <button type="submit" className="btn btn-primary">
              Edit Comment
            </button>
          </center>
        </form>
      </div>
    );
  }
}
