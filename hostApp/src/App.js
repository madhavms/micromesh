const StockWidget = React.lazy(() => import("finWidget/StockWidget"));
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";


const App = () => {
  const [stockList, setStockList] = useState([]);

  console.log(stockList)

  const [allStockList, setAllStockList] = useState([])

  const handleChange = (e) => {
    e.preventDefault()
    const id = e.target.value;
    const stock = allStockList.filter(stock => stock.id === id)
    setStockList(prev => [...prev, ...stock])
  }

  useEffect(() => {
    axios
      .get('http://localhost:8000/stocklist')
      .then(response => {
        if (!response.data) {
          return;
        }
        const stockData = response.data;
        setAllStockList(stockData);
        console.log(stockList)
      })
  }, [])

  return (
    <div>
      <h1 className="text-center">Host Application</h1>
      <select onChange = {handleChange} style = {{marginLeft:250}}>
      {allStockList.map(stock => <option value = {stock.id} key={stock.id}>{stock.name}</option>)}
      </select>
      &nbsp;
      {stockList.map((widget) => (
        <React.Suspense fallback="...loading">
        <StockWidget symbol={widget.id} />
        </React.Suspense>
      ))}
    </div>
  );
};
export default App;
