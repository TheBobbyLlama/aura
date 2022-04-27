import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./AuraTheme/theme";
import "./App.scss";

function App() {
  const navigate = useNavigate();
  /*
  useEffect(() => {
    // TODO - Check authentication and send to either Dashboard or Login!
    navigate("/login");
  }, [navigate]);*/

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
