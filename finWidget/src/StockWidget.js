import React, { useState, useEffect, useRef } from "react";
import { ErrorWidget } from "./components/ErrorWidget";
import Widget from "./components/Widget";
import "./styles.css";
import { useStockData, useUniqueId } from "./utils/Hooks";
import {send, subscribe,unsubscribe} from "messagebusmono";

function StockWidget(props) {
  const { setWidgetStyle, widgetStyle, symbol } = props;
  const { isError, quote, stock } = useStockData(symbol);

 
  const handleMessage = (message) => {
    console.log(`$Stock widget received message: ${message}`);
  };

  const handleMessageRef = useRef(handleMessage);


  useEffect(() => {
    subscribe(handleMessageRef.current);
    return () => {
      unsubscribe(handleMessageRef.current);
    }
  }, []);
 

  useEffect(() => {
    if (
      !!window["widget-style"] &&
      !widgetStyle &&
      typeof setWidgetStyle === "function"
    ) {
      setWidgetStyle(window["widget-style"]);
    }
  }, []);

  const varColor = quote.var < 0 ? "text-red-500" : "text-green-500";
  return !!props.symbol && !isError ? (
    <Widget
      props={props}
      stock={stock}
      quote={quote}
      varColor={varColor}
      symbol={props.symbol}
      handleDelete={props.handleDelete}
    />
  ) : (
    <ErrorWidget />
  );
}

export default StockWidget;
