const StockWidget = React.lazy(() => import("finWidget/StockWidget"));
import React, { useState } from "react";
import { DragNDrop } from "./components/DragNDrop";
import Navbar from "./components/Navbar";
import { WidgetPlaceholder } from "./components/WidgetPlaceholder";
import "./styles.css";
import ShadowRoot from "./utils/ShadowRoot";
import { useFetch } from "./utils/UtilHooks";

const App = () => {
  const listCache = JSON.parse(localStorage.getItem("stockList")) || [];
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const [displayStockList, setDisplayStockList] = useState(listCache);
  const [widgetStyle, setWidgetStyle] = useState("");
  const allStockList = useFetch("http://localhost:8000/stocklist");

  const stockFilter = (stock) => {
    let list = displayStockList.map((listItem) => listItem.id);
    return !list.includes(stock.id);
  };

  const handleDelete = (e) => {
    let id = e.target.getAttribute("value");
    const listToAdd = [...displayStockList.filter((stock) => stock.id !== id)];
    setDisplayStockList(listToAdd);
    localStorage.setItem("stockList", JSON.stringify(listToAdd));
  };

  const handleChange = (e) => {
    e.preventDefault();
    const id = e.target.value;
    const stock = allStockList.filter((stock) => stock.id === id);
    const listToAdd = [...displayStockList, ...stock];
    setDisplayStockList((prev) => [...prev, ...stock]);
    localStorage.setItem("stockList", JSON.stringify(listToAdd));
  };

  return (
    <div className={mode === "light" ? "body" : "body-dark"}>
      <Navbar className="nav" {...{ mode, setMode }} />
      <div className={mode === "light" ? "container" : "container-dark"}>
        <select
          onChange={handleChange}
          className={mode === "light" ? "select" : "select-dark"}
          value=""
        >
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
        <div className="grid-container">
          {displayStockList.map((widget, widgetI) => (
            <DragNDrop
              key={widget.id}
              id={widget.id}
              widgetI={widgetI}
              setDisplayStockList={setDisplayStockList}
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
            </DragNDrop>
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;
