import NewApp from "./NewApp";
import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { DragContextProvider } from "./utils/DragContext";


    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <DragContextProvider>
        <NewApp />
      </DragContextProvider>,
      rootElement
    )





