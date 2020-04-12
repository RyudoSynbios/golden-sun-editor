import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import muiTheme from "./config/theme";

import "./utils/i18n";

import App from "./App";

const theme = createMuiTheme(muiTheme);

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
