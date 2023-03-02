import React, { useState, useEffect, useRef } from "react";
import { ErrorWidget } from "./components/ErrorWidget";
import Widget from "./components/Widget";
import "./styles.css";

function StockWidget(props) {
  const { setWidgetStyle, widgetStyle, handleClose, symbol="AAPL" } = props;

  useEffect(() => {
    if (
      !!window["widget-style"] &&
      !widgetStyle &&
      typeof setWidgetStyle === "function"
    ) {
      setWidgetStyle(window["widget-style"]);
    }
  }, []);

  return symbol && (
    <Widget
      props={props}
      handleDelete={handleClose}
    />
  ) 
}

export default StockWidget;
