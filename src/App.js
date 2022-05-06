import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./AuraTheme/theme";
import "./App.scss";

import AuraHeader from "./components/AuraHeader/AuraHeader";
<<<<<<< HEAD
import Reset from './components/Reset/Reset'
=======
>>>>>>> 3e9cbdf75d29ead5c284a79f432fce2f2f9f67e5

function App() {
  return (

    <ThemeProvider theme={theme}>
      <div className="App">
<<<<<<< HEAD
        <Reset />
=======
        <Outlet />
>>>>>>> 3e9cbdf75d29ead5c284a79f432fce2f2f9f67e5
      </div>
    </ThemeProvider>

  );
}

export default App;
