import React, { useEffect } from "react";
import StockWidget from "./StockWidget";
import RiskWidget from "./RiskWidget";

function StockRiskWidget(props) {
  const { setWidgetStyle, widgetStyle, handleClose, uuid } = props;
  useEffect(() => {
    if (
      !!window["widget-style"] &&
      
      typeof setWidgetStyle === "function"
    ) {
      setWidgetStyle(window["widget-style"]);
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row'}}>
    <div style={{ flexGrow: 0 }}>
      <StockWidget
        symbol="AAPL"
        handleClose={handleClose}
        uuid={uuid}
      />
    </div>
    <div style={{ flexGrow: 0 }}>
      <RiskWidget symbol="AAPL" uuid={uuid}/>
    </div>
  </div>

  );
}

export default StockRiskWidget;
