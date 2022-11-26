const StockWidget = React.lazy(() => import("finWidget/StockWidget"));
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {WidgetPlaceholder} from "./components/WidgetPlaceholder";
import "./styles.css";

const App = () => {
  const listCache = JSON.parse(localStorage.getItem("stockList")) || [];
  const [stockList, setStockList] = useState(listCache);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();


  const [allStockList, setAllStockList] = useState([]);

  const stockFilter = (stock) => {
    let list = stockList.map((listItem) => listItem.id);
    return !list.includes(stock.id);
  };

  const handleDelete = (e) => {
    let id = e.target.getAttribute("value");
    const listToAdd = [...stockList.filter((stock) => stock.id !== id)]
    setStockList(listToAdd);
    localStorage.setItem("stockList", JSON.stringify(listToAdd));
  };

  const handleChange = (e) => {
    e.preventDefault();
    const id = e.target.value;
    const stock = allStockList.filter((stock) => stock.id === id);
    const listToAdd = [...stockList, ...stock];
    setStockList((prev) => [...prev, ...stock]);
    localStorage.setItem("stockList", JSON.stringify(listToAdd));
  };

  const onDragStart = (e, params) => {
    const {widgetI} = params;
    console.log(widgetI)
  }

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    (async () => {
      const { data } = await axios.get("http://localhost:8000/stocklist");
      setAllStockList(data);
    })();
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
      {stockList.map((widget,widgetI) => (
        <div value={widget.id} key={widget.id} className="flex-container" onDragStart={(e) => onDragStart(e, {widgetI})}>
          <React.Suspense fallback={<WidgetPlaceholder/>}>
            <div draggable className="flex mt-5">
              <StockWidget symbol={widget.id} />
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
