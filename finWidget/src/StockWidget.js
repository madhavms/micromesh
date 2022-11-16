import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

function StockWidget(props) {

  const [variance, setVariance] = useState(0.5);

  const [quote, setQuote] = useState({
    price: "--",
    var: "--",
    time: "--"
  });
  const [stock, setStock] = useState({
    stockExchange: "N/A",
    name: "N/A"
  });

  useEffect(() => {
    setInterval(() => setVariance(Math.floor(Math.random() * 10) + 0.5), 3000);
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/stocks/${props.symbol}`
      )
      .then((response) => {
        if (!response.data || !props?.symbol) {
          return;
        }
        const stockDetail = response.data;
        stockDetail.last = (
          stockDetail.last +
          [1, -1][Math.floor(Math.random() * 1 + 0.5)] * variance
        ).toFixed(2);
        console.log(stockDetail,stockDetail.stock_exchange)
        setStock({
          stockExchange: stockDetail.stock_exchange,
          name: stockDetail.name
        });

        setQuote({
          price: stockDetail.last,
          var:
            Math.trunc(-(1 - stockDetail.last / stockDetail.open) * 10000) /
            100,
          time: moment(stockDetail.date).format("YYYY-MM-DD HH:mm")
        });
      });
  }, [variance]);

  const varColor = quote.var < 0 ? "text-red-500" : "text-green-500";

  return (
    
    !!props.symbol && <div
      className={"quote rounded-lg shadow-md p-4 bg-gray-800 w-64 m-auto mt-5"}
    >
      <span className={"quoteSymbol text-sm text-white font-bold"}>
        {props.symbol}
      </span>
      <span className={"quoteSymbol ui-sans-serif text-2xs text-gray-400 ml-1"}>
        {stock.name}
      </span>
      <span className={"quoteSymbol ui-sans-serif text-2xs text-gray-400 ml-1"}>
        ({stock.stockExchange})
      </span>
      <div className={"quote flex flex-row justify-between mt-1"}>
        <div
          className={
            "quotePrice ui-sans-serif self-center text-2xl font-bold items-center text-white"
          }
        >
          ${quote.price}
        </div>
        <div className={"flex flex-col text-right"}>
          <div className={"quoteVar " + varColor}>{quote.var}%</div>
          <div
            className={
              "quoteTime ui-sans-serif text-right text-2xs text-gray-400"
            }
          >
            {quote.time}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockWidget;
