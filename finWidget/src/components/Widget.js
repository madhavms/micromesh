import { send } from "messagebusmono";
import React, { useEffect, useState } from "react";
import { useStockData, useStockList } from "../utils/Hooks";
import { StockWidgetPlaceholder } from "./StockWIdgetPlaceholder";

const Widget = (props) => {
  const [currentSymbol, setCurrentSymbol] = useState("AAPL");
  const { isLoading, isError, quote, stock } = useStockData(currentSymbol);
  const {stockList} = useStockList();
  const { mode, uuid } = props;
  const colorClass = mode === "light" ? "light" : "dark";
  const varColor = quote.var < 0 ? "text-red-500" : "text-green-500";

  useEffect(() => {
    send({ message: { symbol: currentSymbol }, uuid });
  }, []);

  const handleChange = (e) => {
    let id = e.target.value;
    setCurrentSymbol(id);
    send({message: { symbol: id } , uuid})
  };

  if (isLoading) {
    return <StockWidgetPlaceholder />;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex widget-container">
      <div
        className={`quote rounded-lg shadow-md p-4 ${colorClass} bg-gray-800 w-64`}
      >
        <span className={"quoteSymbol text-sm text-white font-bold"}>
          {props.symbol}
        </span>
        <span
          className={"quoteSymbol ui-sans-serif text-2xs text-gray-400 ml-1"}
        >
          {stock.name}
        </span>
        <span
          className={"quoteSymbol ui-sans-serif text-2xs text-gray-400 ml-1"}
        >
          ({stock.stockExchange})
        </span>
        <div className={"quote flex flex-row justify-between mt-1"}>
          <div
            className={
              "quotePrice ui-sans-serif self-center text-2xl font-bold items-center text-white"
            }
          >
            ${quote.price}
          </div>
          <div className={"flex flex-col text-right"}>
            <div className={"quoteVar " + varColor}>{quote.var}%</div>
            <div
              className={
                "quoteTime ui-sans-serif text-right text-2xs text-gray-400"
              }
            >
              {quote.time}
            </div>
          </div>
        </div>
        <select
          onChange={(e) => handleChange(e)}
          className={mode === "light" ? "select" : "select-dark"}
          value={currentSymbol}
        >
          <option key="empty" value="" disabled>
            Select a stock
          </option>
          {!!stockList && stockList.map((stock) => (
            <option value={stock.id} key={stock.id}>
              {stock.id}
            </option>
          ))}
        </select>
      </div>
      <img
        value={props.symbol}
        onClick={props.handleDelete}
        className="image close-button"
        width="30px"
        height="30px"
        src="https://gist.githubusercontent.com/madhavms/3a399c50af05007ff9ab74701a1cb062/raw/ac6d9229c5bb5ce22c92cf045489bf4d904b6246/close-icon.svg"
      ></img>
    </div>
  );
};

export default Widget;
