import React from "react";
import moment from "moment";
export const StockWidgetPlaceholder = (props) => <Template {...{ props }} />;

const Template = (props) => {
  const { mode } = props;
  const colorClass = mode === "light" ? "light" : "dark";
  const varColor = "text-green-500";
  return (
    <div>
      <div
        className={`quote rounded-lg shadow-md p-4 ${colorClass} w-64 h-52px`}
      >
        <span className={"quoteSymbol text-sm text-white font-bold"}>---</span>
        <span
          className={"quoteSymbol ui-sans-serif text-2xs text-gray-400 ml-1"}
        >
          -----
        </span>
        <span
          className={"quoteSymbol ui-sans-serif text-2xs text-gray-400 ml-1"}
        >
          (---)
        </span>
        <div className={"quote flex flex-row justify-between mt-1"}>
          <div
            className={
              "quotePrice ui-sans-serif self-center text-2xl font-bold items-center text-white"
            }
          >
            $--.--
          </div>
          <div className={"flex flex-col text-right"}>
            <div className={"quoteVar " + varColor}>--.--%</div>
            <div
              className={
                "quoteTime ui-sans-serif text-right text-2xs text-gray-400"
              }
            >
              {moment().format("YYYY-MM-DD HH:mm")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
