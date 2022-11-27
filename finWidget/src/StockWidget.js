import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { ErrorWidget } from "./components/ErrorWidget";
import Widget from "./components/Widget";

function StockWidget(props) {
  const [uniqueId, setUniqueId] = useState("");
  const [isError, setIsError] = useState(false);

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
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/stocks/${props.symbol}?v=${uniqueId}`
        );
        setIsError(false);
        if (!data || !props?.symbol) {
          return;
        }
        const stockDetail = data;
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
      } catch (error) {
        setIsError(true);
      }
    })();
  }, [uniqueId]);

  const varColor = quote.var < 0 ? "text-red-500" : "text-green-500";

  return !!props.symbol && !isError ? (
    <Widget props={props} stock={stock} quote={quote} varColor={varColor} symbol={props.symbol} handleDelete={props.handleDelete}/>
  ) : (
    <ErrorWidget />
  );
}

export default StockWidget;
