import React from "react";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./AuraTheme/theme";

import LineChart from "./components/Charts/LineChart";
import BarChart from "./components/Charts/BarChart";
import AreaChart from './components/Charts/AreaChart'

import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LineChart />
        <BarChart />
        <AreaChart/>
      </div>
    </ThemeProvider>
  );
}

export default App;
