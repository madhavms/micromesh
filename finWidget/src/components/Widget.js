import React from "react";

const Widget = (props) => {
  const { stock } = props;
  const { quote } = props;
  const { varColor } = props;
  return (
    <div className="flex relative">
      <div className={"quote rounded-lg shadow-md p-4 bg-gray-800 w-64"}>
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
      </div>
      <img
        value={props.symbol}
        onClick={props.handleDelete}
        className="image"
        width="30px"
        height="30px"
        src="https://gist.githubusercontent.com/madhavms/8cb87494048689fe98177ed2bb6ba329/raw/4d5b97da61310840957cf83fc101004f117a9947/trashcan.svg"
      ></img>
    </div>
  );
};

export default Widget;

