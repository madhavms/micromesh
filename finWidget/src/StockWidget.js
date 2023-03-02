import React, { useState, useEffect, useRef } from "react";
import { ErrorWidget } from "./components/ErrorWidget";
import Widget from "./components/Widget";
import "./styles.css";

function StockWidget(props) {
  const { setWidgetStyle, widgetStyle, handleClose } = props;

  useEffect(() => {
    if (
      !!window["widget-style"] &&
      !widgetStyle &&
      typeof setWidgetStyle === "function"
    ) {
      setWidgetStyle(window["widget-style"]);
    }
  }, []);

  return !!props.symbol && (
    <Widget
      props={props}
      handleDelete={handleClose}
    />
  ) 
}

export default StockWidget;
