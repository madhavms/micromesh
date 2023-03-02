import React from "react";
import Navbar from "./components/Navbar";
import RiskWidget from "./RiskWidget";
import DynamicFinancialNewsWidget from "./NewsWidget";
import StockWidget from "./StockWidget";
import StockRiskWidget from "./StockRiskWidget";

const App = (props) => {
  const news = [
    {
      id: 1,
      title: "Stock Market Hits All-Time High",
      description:
        "The stock market reached a new record high today as investors cheered strong earnings reports and positive economic data.",
      url: "/stock-market-update",
    },
    {
      id: 2,
      title: "Fed Keeps Interest Rates Steady",
      description:
        "The Federal Reserve announced that it will keep interest rates unchanged at its latest meeting, citing steady economic growth and low inflation.",
      url: "/fed-interest-rates",
    },
  ];
  return (
    <div>
    <React.Suspense fallback={<div>Loading...</div>}>
    <Navbar />
      <div className="remote-container">
        <div class="widget-remote">
        <h2>Stock Widget</h2>
        <StockWidget symbol="AAPL" />
        </div>
        <div class="widget-remote">
        <h2>Financial News Widget</h2>
        <DynamicFinancialNewsWidget news={news} />
        </div>
        <div class="widget-remote">
        <h2>Risk Analysis Widget</h2>
        <RiskWidget symbol="AAPL" />
        </div>
      </div>
      </React.Suspense>
    </div>
  );
};

export default App;
