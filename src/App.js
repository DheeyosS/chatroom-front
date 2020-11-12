import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthContext } from "./services/store/authStore";
import Navbar from "./components/navbar";
import { cookieAutoLoginAPI } from "./services/api";

import Login from "./scenes/sign/scenes/login";
// import Register from "./scenes/sign/scenes/register";
import Posts from "./Posts";

function App() {
  const { isAuth, logIn } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      if (!isAuth) {
        const response = await cookieAutoLoginAPI();
        if (!response.error) {
          logIn({ username: response.username });
        }
      }
    })();
  }, [isAuth, logIn]);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
