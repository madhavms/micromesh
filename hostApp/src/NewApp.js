const StockWidget = React.lazy(() => import("finWidget/StockWidget"));
const RiskWidget = React.lazy(() => import("finWidget/RiskWidget"));
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { WidgetPlaceholder } from "./components/WidgetPlaceholder";
import "./styles.css";
import ShadowRoot from "./utils/ShadowRoot";
import { useFetch } from "./utils/UtilHooks";
import { send, subscribe } from "messagebusmono";


const App = () => {

  const handleMessage = (event) => {
    send(event.data);
  };

  useEffect(() => {
    subscribe(handleMessage);
    return(() => {
      unsubscribe(handleMessage);
    })
  },[]);

  const [currentStock, setCurrentStock] = useState("AAPL");
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const [widgetStyle, setWidgetStyle] = useState("");


  const handleDelete = (e) => {
  };

  return (
    <div className={mode === "light" ? "body" : "body-dark"}>
      <Navbar className="nav" {...{ mode, setMode }} />
      <div className={mode === "light" ? "container" : "container-dark"}>
        <br/><br/><br/>
        &nbsp;
        <div className="grid-container">
          <React.Suspense fallback={<WidgetPlaceholder {...{ mode }} />}>
            <ShadowRoot
              style={widgetStyle}
              placeholder={<WidgetPlaceholder />}
            >
              <StockWidget
                symbol={currentStock}
                handleDelete={handleDelete}
                setWidgetStyle={setWidgetStyle}
                widgetStyle={widgetStyle}
                mode={mode}
              />
            </ShadowRoot>
            <ShadowRoot style={widgetStyle}>
              <RiskWidget/>
            </ShadowRoot>
          </React.Suspense>
        </div>
      </div>
    </div>
  );
};
export default App;
