import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { WidgetPlaceholder } from "./components/WidgetPlaceholder";
import "./styles.css";
import ShadowRoot from "./utils/ShadowRoot";
import { send, subscribe, unsubscribe } from "messagebusmono";

const App = () => {
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  const [Component, setComponent] = useState(null);
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const [widgetStyle, setWidgetStyle] = useState("");
  const [apps, setApps] = useState([]);
  const [menu, setMenu] = useState([]);

  const handleMessage = (event) => {
    send(event.data);
  };

  const handleClose = () => {
    setComponent(null);
  }

  const handleMenuSelection = (e, appId, setDrawerOpen) => {
    e.preventDefault();
    setDrawerOpen(false);
    let app = apps.filter((app) => {
      return app.appId === appId;
    })[0];
    if (!!app.appId) {
      const loadRemoteComponent = async () => {
        await loadScript(app.url);
        const container = window[app.remoteId];
        await container.init(__webpack_share_scopes__.default);
        const factory = await window[app.remoteId].get(`./${app.appId}`);
        const module = factory();
        return module;
      };
      setComponent(React.lazy(loadRemoteComponent));
    }
  };

  useEffect(() => {
    subscribe(handleMessage);
    return () => {
      unsubscribe(handleMessage);
    };
  }, []);

  useEffect(() => {
    async function fetchMenu() {
      const response = await fetch("http://localhost:8000/menu");
      const data = await response.json();
      setMenu(data);
    }

    async function fetchApps() {
      const response = await fetch("http://localhost:8000/widgets");
      const data = await response.json();
      setApps(data);
    }

    fetchMenu();
    fetchApps();
  }, []);

  return (
    <div className={mode === "light" ? "body" : "body-dark"}>
      <Navbar
        className="nav"
        {...{ mode, setMode, menu, handleMenuSelection }}
      />
      <div className={mode === "light" ? "container" : "container-dark"}>
        <br />
        <br />
        <br />
        &nbsp;
        <div >
          <React.Suspense fallback={<WidgetPlaceholder/>}>
            <ShadowRoot style={widgetStyle}>
              {!!Component ? (
                <Component setWidgetStyle={setWidgetStyle} widgetStyle={widgetStyle} handleClose={handleClose}/>
              ) : (
                <div></div>
              )}
            </ShadowRoot>
          </React.Suspense>
        </div>
      </div>
    </div>
  );
};
export default App;
