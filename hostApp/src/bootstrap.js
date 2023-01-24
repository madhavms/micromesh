import App from "./App";
import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { DragContextProvider } from "./utils/DragContext";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <DragContextProvider>
    <App />
  </DragContextProvider>,
  rootElement
);
