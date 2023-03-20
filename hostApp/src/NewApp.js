import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./styles.css";
import ShadowRoot from "./utils/ShadowRoot";
import { send, subscribe, unsubscribe } from "messagebusmono";
import { v4 as uuidv4 } from 'uuid';
import MyFallbackComponent from "./components/Placeholder";
import Footer from "./components/Footer";

const NewApp = () => {
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
  const [uuid, setuuid] = useState(uuidv4());

  const handleMessage = (event) => {
    send({data: event.data, uuid});
  };

  const handleClose = () => {
    setComponent(null);
    sessionStorage.setItem('currentAppId',"");
    sessionStorage.setItem('apps',JSON.stringify([]));

  }

  const loadRemoteComponent = (app) => async () => {
    await loadScript(app.url);
    const container = window[app.remoteId];
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[app.remoteId].get(`./${app.appId}`);
    const module = factory();
    return module;
  };

  const handleMenuSelection = (e, appId, setDrawerOpen) => {
    setDrawerOpen(false);
    let app = apps.filter((app) => {
      return app.appId === appId;
    })[0];
    if (!!app.appId) {
      setComponent(React.lazy(loadRemoteComponent(app)));
      sessionStorage.setItem('currentAppId',app.appId)
    }
  };

  const cacheCurrentWidget = (appId) => {
    let apps = JSON.parse(sessionStorage.getItem('apps')) || [];
    let app = apps.filter((app) => {
      return app.appId === appId;
    })[0];
    if (!!appId) {
      setComponent(React.lazy(loadRemoteComponent(app)));
    }
  }

  useEffect(() => {
    const cachedAppId = sessionStorage.getItem('currentAppId');
    let apps = JSON.parse(sessionStorage.getItem('apps')) || [];
    if(cachedAppId !== 'undefined' &&  !!apps.length) {
      console.log('this is hit!!')
      cacheCurrentWidget(cachedAppId);
    }
  }, [])

  useEffect(() => {
    subscribe(handleMessage);
    return () => {
      unsubscribe(handleMessage);
    };
  }, []);

  useEffect(() => {
    async function fetchMenu() {
      const response = await fetch(`${process.env.FIN_API_URL}/menu`);
      const data = await response.json();
      setMenu(data);
    }
  

    async function fetchApps() {
      const response = await fetch(`${process.env.FIN_API_URL}/widgets`);
      const data = await response.json();
      sessionStorage.setItem('apps', JSON.stringify(data));
      setApps(data);
    }

    fetchMenu();
    fetchApps();
  }, []);

  return  (
    <div className={`${mode === "light" ? "body" : "body-dark"} root-container`}>
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
          <React.Suspense fallback={<MyFallbackComponent/>}>
            <ShadowRoot style={widgetStyle}>
              {!!Component ? (
                <Component setWidgetStyle={setWidgetStyle} widgetStyle={widgetStyle} handleClose={handleClose} uuid={uuid}/>
              ) : (
                <div></div>
              )}
            </ShadowRoot>
          </React.Suspense>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default NewApp;
