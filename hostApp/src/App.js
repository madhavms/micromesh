const StockWidget = React.lazy(() => import("finWidget/StockWidget"));
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const [stockList, setStockList] = useState([]);

  const [allStockList, setAllStockList] = useState([]);

  const stockFilter = (stock) => {
    let list = stockList.map((listItem) => listItem.id);
    return !list.includes(stock.id);
  };

  const handleDelete = (e) => {
    let id = e.target.getAttribute("value");
    console.log("hi", id);
    setStockList([...stockList.filter((stock) => stock.id !== id)]);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const id = e.target.value;
    const stock = allStockList.filter((stock) => stock.id === id);
    setStockList((prev) => [...prev, ...stock]);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/stocklist").then((response) => {
      if (!response.data) {
        return;
      }
      const stockData = response.data;
      setAllStockList(stockData);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Host Application</h1>
      <select onChange={handleChange} className="select" value="">
        <option key="empty" value="" disabled>
          Select a stock
        </option>
        {allStockList.filter(stockFilter).map((stock) => (
          <option value={stock.id} key={stock.id}>
            {stock.name}
          </option>
        ))}
      </select>
      &nbsp;
      {stockList.map((widget) => (
        <div key={widget.id} className="flex-container">
          <React.Suspense fallback="...loading">
            <StockWidget symbol={widget.id} />
            <div>
              <img
                value={widget.id}
                onClick={handleDelete}
                className="image"
                src="https://gist.githubusercontent.com/madhavms/8cb87494048689fe98177ed2bb6ba329/raw/4d5b97da61310840957cf83fc101004f117a9947/trashcan.svg"
              ></img>
            </div>
          </React.Suspense>
        </div>
      ))}
    </div>
  );
};
export default App;
