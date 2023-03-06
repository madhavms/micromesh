import React, { useState, useEffect, useRef } from "react";
import { ErrorWidget } from "./components/ErrorWidget";
import Widget from "./components/Widget";
import "./styles.css";

function StockWidget(props) {
  const { setWidgetStyle, widgetStyle, handleClose, symbol="AAPL",uuid } = props;

  useEffect(() => {
    if (
      !!window["widget-style"] &&
      typeof setWidgetStyle === "function"
    ) {
      setWidgetStyle(window["widget-style"]);
    }
  }, []);

  return symbol && (
    <Widget
      props={props}
      handleDelete={handleClose}
      uuid={uuid}
    />
  ) 
}

export default StockWidget;
