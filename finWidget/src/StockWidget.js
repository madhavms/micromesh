import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

function StockWidget(props) {
  const [uniqueId, setUniqueId] = useState("");

  const [quote, setQuote] = useState({
    price: "--",
    var: "--",
    time: "--",
  });
  const [stock, setStock] = useState({
    stockExchange: "N/A",
    name: "N/A",
  });

  useEffect(() => {
    const id = setInterval(() => {
      setUniqueId(new Date().getTime()); // get a unique id - this grabs seconds since unix epoch
    }, 3000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/stocks/${props.symbol}?v=${uniqueId}`)
      .then((response) => {
        if (!response.data || !props?.symbol) {
          return;
        }
        const stockDetail = response.data;

        setStock({
          stockExchange: stockDetail.stock_exchange,
          name: stockDetail.name,
        });

        setQuote({
          price: stockDetail.last,
          var:
            Math.trunc(-(1 - stockDetail.last / stockDetail.open) * 10000) /
            100,
          time: moment(stockDetail.date).format("YYYY-MM-DD HH:mm"),
        });
      });
  }, [uniqueId]);

  const varColor = quote.var < 0 ? "text-red-500" : "text-green-500";

  return (
    !!props.symbol && (
      <div
        className={
          "quote rounded-lg shadow-md p-4 bg-gray-800 w-64 m-auto mt-5"
        }
      >
        <span className={"quoteSymbol text-sm text-white font-bold"}>
          {props.symbol}
        </span>
        <span
          className={"quoteSymbol ui-sans-serif text-2xs text-gray-400 ml-1"}
        >
          {stock.name}
        </span>
        <span
          className={"quoteSymbol ui-sans-serif text-2xs text-gray-400 ml-1"}
        >
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
    )
  );
}

export default StockWidget;
