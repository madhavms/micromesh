import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [stockList, setStockList] = useState([]);

    useEffect(() => {
        (async () => {
          try{
          const { data } = await axios.get(url);
          setStockList(data);
          }
          catch(err){
            console.error('Error while fetching data',err)
          }
        })();
      }, [url]);

    return stockList
}