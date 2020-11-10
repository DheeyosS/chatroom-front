import React, { useEffect, useState } from "react";
import { DOMAIN } from "./config/index";
import axios from "axios";
import { getCookie } from "./services/utils/get-cookie";
import PostsInput from "./PostsInput";

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
  return (
    <div>
      {/* <h1>All Posts</h1> */}
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

export default Posts;
