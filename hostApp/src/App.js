const StockWidget = React.lazy(() => import("finWidget/StockWidget"));
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { WidgetPlaceholder } from "./components/WidgetPlaceholder";
import "./styles.css";

const App = () => {
  const listCache = JSON.parse(localStorage.getItem("stockList")) || [];
  const [stockList, setStockList] = useState(listCache);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();
  const enteredNode = useRef();

  const [allStockList, setAllStockList] = useState([]);

  const stockFilter = (stock) => {
    let list = stockList.map((listItem) => listItem.id);
    return !list.includes(stock.id);
  };

  const handleDelete = (e) => {
    let id = e.target.getAttribute("value");
    const listToAdd = [...stockList.filter((stock) => stock.id !== id)];
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

  const handleDragStart = (e, params) => {
    const { widgetI } = params;
    dragItem.current = widgetI;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => setDragging(true), 0);
  };

  const handleDragEnd = () => {
    console.log("Ending drag...");
    setDragging(false);
    const dragItemI = dragItem.current;
    const enteredNodeI = enteredNode.current
    if(typeof dragItemI === 'number' && typeof enteredNodeI === 'number') {
      console.log('hey')
      setStockList((prevList) => {
        let newList = JSON.parse(JSON.stringify(prevList));
        [newList[enteredNodeI], newList[dragItemI]] = [
          newList[dragItemI],
          newList[enteredNodeI],
        ];
        localStorage.setItem("stockList", JSON.stringify(newList));
        return newList;
      });
      dragNode.current.removeEventListener("dragend", handleDragEnd);
      dragItem.current = null;
      dragNode.current = null;
      enteredNode.current = null;
    }
    
  };

  const handleDragEnter = (e, params) => {
    let { widgetI } = params;
    const currentItem = dragItem.current;
    
    if (currentItem!==widgetI && enteredNode.current != currentItem) {
      console.log("TARGET IS NOT THE SAME");
      console.log(`currentItem = ${currentItem}`);
      console.log("Entering drag. widgetI = ", widgetI);
      enteredNode.current = widgetI;
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault()
  };

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
      {stockList.map((widget, widgetI) => (
        <div
          draggable
          value={widget.id}
          key={widget.id}
          onDragOver={handleDragOver}
          onDragStart={(e) => handleDragStart(e, { widgetI })}
          onDragEnter={dragging ? (e) => handleDragEnter(e, { widgetI }) : null}
          className="flex mt-5"
        >
          <React.Suspense fallback={<WidgetPlaceholder />}>
            <StockWidget symbol={widget.id} />
            <img
              value={widget.id}
              onClick={handleDelete}
              className="image"
              src="https://gist.githubusercontent.com/madhavms/8cb87494048689fe98177ed2bb6ba329/raw/4d5b97da61310840957cf83fc101004f117a9947/trashcan.svg"
            ></img>
          </React.Suspense>

        </div>
        
      ))}
    </div>
  );
};
export default App;
