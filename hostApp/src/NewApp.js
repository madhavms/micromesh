import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./styles.css";
import ShadowRoot from "./utils/ShadowRoot";
import { send, subscribe, unsubscribe } from "messagebusmono";
import { v4 as uuidv4 } from "uuid";
import MyFallbackComponent from "./components/Placeholder";
import Footer from "./components/Footer";
import About from "./components/AboutScreen";
import TabsBar from "./components/TabsBar";

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
  const [selectedTab, setSelectedTab] = useState(
    sessionStorage.getItem("selectedTab") || null
  );
  const [openTabs, setOpenTabs] = useState(
    JSON.parse(sessionStorage.getItem("openTabs")) || []
  );

  const handleMessage = (event) => {
    send({ data: event.data, uuid });
  };

  const handleClose = () => {
    setComponent(null);
    sessionStorage.setItem("currentAppId", "");
    sessionStorage.setItem("apps", JSON.stringify([]));
  };

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

    let existingTab = openTabs.find((tab) => tab.appId === appId);
    let baseLabel = e.target.innerText;
    if (existingTab) {
      let newLabel = baseLabel;
      let count = 1;

      let duplicateTabs = openTabs.filter((tab) =>
        tab.label.startsWith(baseLabel)
      );
      if (duplicateTabs.length > 0) {
        count = duplicateTabs.length + 1;
        newLabel = `${baseLabel} (${count-1})`;
      }

      const updatedTabs = [...openTabs, { appId, label: newLabel }];
      setOpenTabs(updatedTabs);
      sessionStorage.setItem("openTabs", JSON.stringify(updatedTabs));

      // Set the selected tab to the index of the newly added tab
      setSelectedTab(updatedTabs.length - 1);
      sessionStorage.setItem("selectedTab", updatedTabs.length - 1);
    } else {
      const updatedTabs = [...openTabs, { appId, label: baseLabel }];
      setOpenTabs(updatedTabs);
      sessionStorage.setItem("openTabs", JSON.stringify(updatedTabs));

      // Set the selected tab to the index of the newly added tab
      setSelectedTab(updatedTabs.length - 1);
      sessionStorage.setItem("selectedTab", updatedTabs.length - 1);
    }

    let app = apps.filter((app) => {
      return app.appId === appId;
    })[0];
    if (!!app?.appId) {
      setComponent(React.lazy(loadRemoteComponent(app)));
      sessionStorage.setItem("currentAppId", app.appId);
    }
  };

  const handleCloseTab = (label) => {
    // Find the index of the tab to be removed
    const tabIndex = openTabs.findIndex((tab) => tab.label === label);
    let newApp = "";
  
    if (tabIndex !== -1) {
      // Remove the tab from the openTabs array
      const newOpenTabs = [...openTabs];
      newOpenTabs.splice(tabIndex, 1);
      if(!newOpenTabs.length) {
        setComponent(null)
      }
      // Update the openTabs state
      setOpenTabs(newOpenTabs);
      sessionStorage.setItem("openTabs", JSON.stringify(newOpenTabs));
  
      // If the removed tab was the currently selected tab, update the selectedTab state
      if (selectedTab === tabIndex) {
        setSelectedTab(Math.max(tabIndex - 1, 0));
        sessionStorage.setItem("selectedTab", Math.max(tabIndex - 1, 0));
        newApp = newOpenTabs[Math.max(tabIndex - 1, 0)]
      } else if (selectedTab > tabIndex) {
        setSelectedTab(selectedTab - 1);
        sessionStorage.setItem("selectedTab", selectedTab - 1);
        newApp = newOpenTabs[selectedTab - 1];
      }
      let appId = newApp?.appId;
      let app = apps.filter((app) => {
        return app.appId === appId;
      })[0];
      if (!!app?.appId) {
        setComponent(React.lazy(loadRemoteComponent(app)));
        sessionStorage.setItem("currentAppId", app.appId);
      }
      else {
        sessionStorage.setItem("currentAppId", null);
      }
    }
  };
  

  const handleTabSelection = (e, label) => {
    const index = openTabs.findIndex((tab) => tab.label === label);
    const appId = openTabs[index].appId;
    setSelectedTab(index);
    sessionStorage.setItem("selectedTab", index)

    if (!openTabs.find((tab) => tab.label === label)) {
      setOpenTabs([...openTabs, { appId, label }]);
      sessionStorage.setItem("openTabs",JSON.stringify([...openTabs, { appId, label}]));
    }

    let app = apps.filter((app) => {
      return app.appId === appId;
    })[0];
    if (!!app?.appId) {
      setComponent(React.lazy(loadRemoteComponent(app)));
      sessionStorage.setItem("currentAppId", app.appId);
    }
  };

  const cacheCurrentWidget = (appId) => {
    let apps = JSON.parse(sessionStorage.getItem("apps")) || [];
    let app = apps.filter((app) => {
      return app.appId === appId;
    })[0];
    if (!!appId && !!openTabs.length) {
      setComponent(React.lazy(loadRemoteComponent(app)));
    }
  };

  useEffect(() => {
    const cachedAppId = sessionStorage.getItem("currentAppId");
    let apps = JSON.parse(sessionStorage.getItem("apps")) || [];
    if (cachedAppId !== "undefined" && !!cachedAppId && !!apps.length) {
      cacheCurrentWidget(cachedAppId);
    }
  }, []);

  useEffect(() => {
    subscribe(handleMessage);
    return () => {
      unsubscribe(handleMessage);
    };
  }, []);

  useEffect(() => {
    async function fetchMenu() {
      const response = await fetch(`${process.env.FIN_API_URL}/menu`);
      let data = await response.json();
      if (data["detail"] === "Not Found") data = [];
      setMenu(data);
    }

    async function fetchApps() {
      const response = await fetch(`${process.env.FIN_API_URL}/widgets`);
      let data = await response.json();
      if (data["detail"] === "Not Found") data = [];
      sessionStorage.setItem("apps", JSON.stringify(data));
      setApps(data);
    }

    fetchMenu();
    fetchApps();
  }, []);

  return (
    <div
      className={`${mode === "light" ? "body" : "body-dark"} root-container`}
    >
      <TabsBar
        openTabs={openTabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        mode={mode}
        handleTabSelection={handleTabSelection}
        handleCloseTab={handleCloseTab}
      />
      <Navbar
        className="nav"
        {...{
          mode,
          setMode,
          menu,
          handleMenuSelection,
          selectedTab,
          openTabs,
          setSelectedTab,
        }}
      />
      <div className={mode === "light" ? "container" : "container-dark"}>
        {!openTabs.length && <About {...{ mode }} />}
        <div>
          <React.Suspense fallback={<MyFallbackComponent />}>
            <ShadowRoot style={widgetStyle}>
              {!!Component ? (
                <Component
                  {...{ setWidgetStyle, widgetStyle, uuid, mode }}
                />
              ) : (
                <div></div>
              )}
            </ShadowRoot>
          </React.Suspense>
        </div>   
      </div>
      <Footer {...{ mode }} />
    </div>
  );
};

export default NewApp;
