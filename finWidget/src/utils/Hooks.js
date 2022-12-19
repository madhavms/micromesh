import { useEffect, useState } from "react";
import moment from "moment";


export const useStockData = (symbol) => {
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
                Math.trunc(-(1 - stockDetail.last / stockDetail.open) * 10000) /
                100,
              time: moment(stockDetail.date).format("YYYY-MM-DD HH:mm"),
            });
        };
        ws.onerror = (error) => {
          setIsError(true);
          console.error(error);
        };
        return () => {
          ws.close();
        };
      }, [symbol]);
        

      return {isError, quote, stock}
}
