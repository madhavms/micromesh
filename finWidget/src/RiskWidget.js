import React, { useCallback, useEffect, useState } from 'react';
import { useStockRisk } from './utils/Hooks';
import {subscribe, unsubscribe} from "messagebusmono";
import RiskWidgetPlaceholder from './components/RiskWidgetPlaceholder';

function RiskWidget({symbol} = null) {

  const [currentSymbol, setCurrentSymbol] = useState("");
  const { riskData, isLoading, error } = useStockRisk(currentSymbol);
  const handleMessage = (event) => {
    if(event.data.message && event.data.message.symbol)
    setCurrentSymbol(event.data.message.symbol);
  };

  useEffect(() => {
    subscribe(handleMessage);
    return(() => {
      unsubscribe(handleMessage);
    })
  },[]);

  useEffect(() => {
    if(!!symbol) {
      setCurrentSymbol(symbol);
    }
  }, [symbol]);



  if (isLoading) {
    return <RiskWidgetPlaceholder />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!riskData || !currentSymbol) {
    return <div>Enter a symbol to see the risk data</div>;
  }


  return (
    <div className="risk-container">
      <div className="risk-symbol">{riskData.id}</div>
      <div className="risk-risk">Risk: {riskData.risk}</div>
      <div className="risk-description">{riskData.description}</div>
    </div>
  );
}

export default RiskWidget;
