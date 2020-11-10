import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/index.scss";

import { AuthProvider } from "./services/store/authStore";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
