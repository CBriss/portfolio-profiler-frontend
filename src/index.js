import React from "react";
import ReactDom from "react-dom";
import App from "./app";

import "./index.css";
import "fontsource-roboto";

// Environment Variables
require("dotenv").config();

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
