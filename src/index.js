// This is for the fake API. Do not delete!

import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { worker } from "./mocks/browser";

worker.start();

console.log(theme);
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
