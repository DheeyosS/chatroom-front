import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/index.scss";
import "bootstrap/dist/css/bootstrap.css";

import { AuthProvider } from "./services/store/authStore";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
