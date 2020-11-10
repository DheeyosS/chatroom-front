import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { AuthContext } from "../../services/store/authStore";
import { Menu, Button } from "antd";
import { eraseCookie } from "../../services/utils/erase-cookie";

export default function Navbar() {
  const router = useHistory();
  const { isAuth, username, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
    eraseCookie("token");
    router.push("/");
  };

  return (
    <Menu selectedKeys={[]} mode="horizontal" style={{ marginBottom: "2rem" }}>
      {!isAuth && (
        <Menu.Item key="login">
          <Link to="/">log in</Link>
        </Menu.Item>
      )}
      {!isAuth && (
        <Menu.Item key="register">
          <Link to="/register">register</Link>
        </Menu.Item>
      )}
      {isAuth && (
        <Menu.Item key="posts">
          <Link to="/posts">posts</Link>
        </Menu.Item>
      )}
      {isAuth && <Button onClick={handleLogout}>log out</Button>}
      {isAuth && <span style={{ marginLeft: "1rem" }}>user:{username}</span>}
    </Menu>
  );
}
