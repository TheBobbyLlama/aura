import React from "react";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./AuraTheme/theme";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Button from "./components/Button/Button";

import "./App.scss";
import Input from "./components/Input/Input";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
        <Button fullWidth variant="contained">
          test
        </Button>
        <Input />
        <Input inputSize="small" />
      </div>
    </ThemeProvider>
  );
}

export default App;
