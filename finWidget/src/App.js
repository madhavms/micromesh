import React from "react";
import StockWidget from "./StockWidget";

const App = (props) => {
  return (
    <div>
      <h1 className="text-center">Remote Application</h1>
      <div className="container">
      <StockWidget symbol="AAPL"/>
      </div>
    </div>
  );
};

export default App;
