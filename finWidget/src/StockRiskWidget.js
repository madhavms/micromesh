import React, { useEffect } from "react";
import StockWidget from "./StockWidget";
import RiskWidget from "./RiskWidget";

function StockRiskWidget(props) {
  const { setWidgetStyle, widgetStyle, handleClose, uuid } = props;

  useEffect(() => {
    if (!!window["widget-style"] && typeof setWidgetStyle === "function") {
      setWidgetStyle(window["widget-style"]);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div style={{ flexGrow: 0 }}>
        <StockWidget symbol="AAPL" handleClose={handleClose} uuid={uuid} />
      </div>
      <div style={{ flexGrow: 0 }}>
        <RiskWidget symbol="AAPL" uuid={uuid} />
      </div>

      {/* Add media query to change flex-direction to column for small screens */}
      <style>
        {`
          @media screen and (max-width: 768px) {
            div {
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
}

export default StockRiskWidget;
