import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { DragContextProvider } from "./utils/DragContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <DragContextProvider>
    <App/>
  </DragContextProvider>,
  rootElement
);
