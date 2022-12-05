const StockWidget = React.lazy(() => import("finWidget/StockWidget"));
import React, { useEffect, useRef, useState } from "react";
import { WidgetPlaceholder } from "./components/WidgetPlaceholder";
import "./styles.css";
import ShadowRoot from "./utils/ShadowRoot";
import { useFetch } from "./utils/UtilHooks";

const App = () => {
  const listCache = JSON.parse(localStorage.getItem("stockList")) || [];
  const [stockList, setStockList] = useState(listCache);
  const [widgetStyle, setWidgetStyle] = useState("");
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();
  const enteredNode = useRef();
  const allStockList = useFetch("http://localhost:8000/stocklist");

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
    setDragging(false);
    const dragItemI = dragItem.current;
    const enteredNodeI = enteredNode.current;
    if (typeof dragItemI === "number" && typeof enteredNodeI === "number") {
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

    if (currentItem !== widgetI && enteredNode.current != currentItem) {
      enteredNode.current = widgetI;
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

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
          key={widget.id}
          draggable
          value={widget.id}
          onDragOver={handleDragOver}
          onDragStart={(e) => handleDragStart(e, { widgetI })}
          onDragEnter={dragging ? (e) => handleDragEnter(e, { widgetI }) : null}
          className="flex mt-5 cursor"
        >
          <React.Suspense fallback={<WidgetPlaceholder />}>
            <ShadowRoot
              id={widget.id}
              style={widgetStyle}
              placeholder={<WidgetPlaceholder />}
            >
              <StockWidget
                symbol={widget.id}
                handleDelete={handleDelete}
                setWidgetStyle={setWidgetStyle}
                widgetStyle={widgetStyle}
              />
            </ShadowRoot>
          </React.Suspense>
        </div>
      ))}
    </div>
  );
};
export default App;
