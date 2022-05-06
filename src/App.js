import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./AuraTheme/theme";
import "./App.scss";

import AuraHeader from "./components/AuraHeader/AuraHeader";
import Reset from './components/Reset/Reset'

function App() {
  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        <Reset />
      </div>
    </ThemeProvider>

  );
}

export default App;
