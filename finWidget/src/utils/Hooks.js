import { useEffect, useState } from "react";
import moment from "moment";

export const useStockData = (symbol) => {
  const [isError, setIsError] = useState(false);
  const [websocket, setWebsocket] = useState(null);
  const [quote, setQuote] = useState({
    price: "--",
    var: "--",
    time: "--",
  });
  const [stock, setStock] = useState({
    stockExchange: "N/A",
    name: "N/A",
  });

  const connectWebsocket = () => {
    const ws = new WebSocket(`ws://localhost:8000/stockprices/${symbol}`);
    ws.onopen = () => {
      console.log("Websocket connection established");
    };
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setIsError(false);
      const stockDetail = data;
      setStock({
        stockExchange: stockDetail.stock_exchange,
        name: stockDetail.name,
      });
      setQuote({
        price: stockDetail.last,
        var:
          Math.trunc(-(1 - stockDetail.last / stockDetail.open) * 10000) / 100,
        time: moment(stockDetail.date).format("YYYY-MM-DD HH:mm"),
      });
    };
    ws.onerror = (error) => {
      setIsError(true);
      console.error(error);
    };
    ws.onclose = () => {
      console.log("Websocket connection closed");
      // Attempt to reconnect to the websocket after a short delay
      setTimeout(connectWebsocket, 1000);
    };
    setWebsocket(ws);
  };

  useEffect(() => {
    connectWebsocket();
    return () => {
      if (websocket && websocket.readyState === WebSocket.OPEN) {
        websocket.close();
      }
    };
  }, []);

  return { isError, quote, stock };
};
