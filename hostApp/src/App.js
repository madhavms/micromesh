const StockWidget = React.lazy(() => import("finWidget/StockWidget"));
import React, { useState } from "react";
import { DragNDrop } from "./components/DragNDrap";
import { WidgetPlaceholder } from "./components/WidgetPlaceholder";
import "./styles.css";
import ShadowRoot from "./utils/ShadowRoot";
import { useFetch } from "./utils/UtilHooks";

const App = () => {
  const listCache = JSON.parse(localStorage.getItem("stockList")) || [];
  const [stockList, setStockList] = useState(listCache);
  const [widgetStyle, setWidgetStyle] = useState("");
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
        <DragNDrop
          key={widget.id}
          id={widget.id}
          widgetI={widgetI}
          setStockList={setStockList}
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
  );
};
export default App;
