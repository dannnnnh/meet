import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as atatus from "atatus-spa";

atatus.config("5c7dcf6fb47c44109de4fd369dab8b86").install();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
