import React, { useEffect, useState } from "react";
import { DOMAIN } from "./config/index";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${DOMAIN}/api/posts/`, {
        headers: {
          Authorization: `Token 311067c9572651952f190bd870aa2bc2cd55864c`,
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
      <h1>All Posts</h1>
      <ul className="postlist">
        {posts.map((post, i) => (
          <li key={post.id}>
            {post.username}
            <br />
            {post.text}
            <br />
            <ul className="commentlist">
              {post.comments.map((comment, j) => (
                <li key={comment.id}>
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

export default Posts;
