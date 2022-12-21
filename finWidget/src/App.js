import React from "react";
import Navbar from "./components/Navbar";
import FinancialNewsWidget from "./NewsWidget";
import StockWidget from "./StockWidget";

const App = (props) => {
  const news = [
    {
      id: 1,
      title: 'Stock Market Hits All-Time High',
      description: 'The stock market reached a new record high today as investors cheered strong earnings reports and positive economic data.',
      url: '/stock-market-update',
    },
    {
      id: 2,
      title: 'Fed Keeps Interest Rates Steady',
      description: 'The Federal Reserve announced that it will keep interest rates unchanged at its latest meeting, citing steady economic growth and low inflation.',
      url: '/fed-interest-rates',
    }
  ];
  return (
    <div>
      <Navbar/>
      <div className="container">
      <br/><br/><br/><br/><br/>
      <h2>Stock Widget</h2>
      <br/><br/>
      <StockWidget symbol="AAPL"/>
      <br/><br/>
      <h2>Financial News Widget</h2>
      <br/><br/>
      <FinancialNewsWidget news={news}/>
      </div>
    </div>
  );
};

export default App;
