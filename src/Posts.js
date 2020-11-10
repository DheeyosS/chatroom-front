import React, { useEffect, useState } from "react";
import { DOMAIN } from "./config/index";
import axios from "axios";
import { getCookie } from "./services/utils/get-cookie";

import PostsInput from "./PostsInput";
import CommentsInput from "./CommentsInput";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${DOMAIN}/api/posts/`, {
        headers: {
          Authorization: `Token ${getCookie("token")}`,
        },
      })
      .then((res) => {
        const { data } = res;
        console.log(data);
        setPosts(data);
      });
  }, []);

  // const deletePost = async (id) => {
  //   axios.delete(`${DOMAIN}/api/posts/${id}`);
  // };

  // const deleteComment = async (id) => {
  //   axios.delete(`${DOMAIN}/api/comments/${id}`);
  // };

  // const editPost = async (id) => {
  //   axios.post(`${DOMAIN}/api/comments/${id}/edit/`);
  // };

  return (
    <div>
      <center>
        <h1>All Posts</h1>
      </center>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "80h",
        }}
      ></div>
      <div>
        <PostsInput />
      </div>
      <ul className="postlist">
        {posts.map((post, i) => (
          <li className="border border-primary text-left" key={post.id}>
            <label className="font-weight-bold">{`${post.username}:`}</label>
            {/* <button onClick={() => editPost(post.id)}>edit</button> */}
            <br />
            {post.text}
            <br />
            <ul className="commentlist">
              {post.comments.map((comment, j) => (
                <li
                  className="border border-primary text-left"
                  key={comment.id}
                >
                  {" "}
                  <label className="font-weight-bold">{`${comment.username}:`}</label>
                  {/* <button onClick={() => deleteComment(comment.id)}>X</button> */}
                  <br />
                  {comment.text}{" "}
                  <div>
                    id = post.id;
                    <CommentsInput />
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
