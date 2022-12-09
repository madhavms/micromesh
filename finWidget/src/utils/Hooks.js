import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

const useUniqueId = () => {
  const [uniqueId, setUniqueId] = useState("00000");
  useEffect(() => {
    const id = setInterval(() => {
      setUniqueId(new Date().getTime()); // get a unique id - this grabs seconds since unix epoch
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return uniqueId;
};

export const useStockData = (symbol) => {
    const [isError, setIsError] = useState(false);
    const uniqueId = useUniqueId();
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
        
        (async () => {
          try {
            const { data } = await axios.get(
              `http://localhost:8000/stocks/${symbol}?v=${uniqueId}`
            );

            if (!data || !symbol) {
              return;
            }
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
          } catch (error) {
            setIsError(true);
          }
        })();
      }, [uniqueId]); 
      return {isError, quote, stock}
}