import App from "./App";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const StockWidget = React.lazy(() => import("finWidget/StockWidget"));
const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

const widgetDivs = document.querySelectorAll(".fin-widget");

const Widget = (props) => (
  <React.Suspense fallback="Loading Button">
    <StockWidget symbol={props.symbol} />
  </React.Suspense>
);

let widgets = Array.from(widgetDivs);
widgets.map(widget => widget.draggable = true)

// Inject our React App into each class
widgetDivs.forEach((div) => {
  ReactDOM.render(<Widget symbol={div.dataset.symbol} />, div);
});
