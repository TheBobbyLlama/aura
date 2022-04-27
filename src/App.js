import React from "react";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./AuraTheme/theme";

import Login from "./components/Login/LoginPage";

import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;