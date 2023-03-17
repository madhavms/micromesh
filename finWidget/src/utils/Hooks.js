import { useEffect, useState } from "react";
import moment from "moment";

export const useStockList = () => {
  const [stockList, setStockList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8000/stocklist");
        const data = await response.json();
        setStockList(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return { stockList, isLoading, error };
}

export const useStockData = (symbol) => {
  const [isError, setIsError] = useState(false);
  const [websocket, setWebsocket] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log('isLoading=',isLoading)
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
    if (websocket && websocket.readyState === WebSocket.OPEN) {
      websocket.close(1000);
    }
    const ws = new WebSocket(`ws://localhost:8000/stockprices/${symbol}`);
    ws.onopen = () => {
    };
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setIsError(false);
      const stockDetail = data;
      setIsLoading(false);
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
    ws.onclose = (message) => {
      if(message.code!==1000){
      // Attempt to reconnect to the websocket after a short delay
      setTimeout(connectWebsocket, 1000);
    };
  }
    setWebsocket(ws);
  };

  useEffect(() => {
    connectWebsocket();
    return () => {
      if (websocket && websocket.readyState === WebSocket.OPEN) {
        websocket.close();
      }
    };
  }, [symbol]);

  return { isLoading, isError, quote, stock };
};


export function useStockRisk(symbol) {
  const [riskData, setRiskData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/risk/${symbol}`);
        const data = await response.json();
        setRiskData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (!!symbol) {
      fetchData();
    }
  }, [symbol]);

  return { riskData, isLoading, error };
}

