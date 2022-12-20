import React from "react";
import Navbar from "./components/Navbar";
import StockWidget from "./StockWidget";

const App = (props) => {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <br/><br/><br/><br/><br/>
      <StockWidget symbol="AAPL"/>
      </div>
    </div>
  );
};

export default App;
