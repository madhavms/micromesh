import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./styles.css";
import ShadowRoot from "./utils/ShadowRoot";
import { send, subscribe, unsubscribe } from "messagebusmono";
import { v4 as uuidv4 } from "uuid";
import FallbackComponent from "./components/Placeholder";
import Footer from "./components/Footer";
import About from "./components/AboutScreen";
import TabsBar from "./components/TabsBar";
import { loadRemoteComponent } from "./helpers/remoteLoader";
import {useWorkspaces} from "./helpers/workspaceHelper";

const Shell = ({ apps, menu, toggleMode, mode }) => {
  const [Component, setComponent] = useState(null);
  const [widgetStyle, setWidgetStyle] = useState("");
  const [uuid, setuuid] = useState(uuidv4());
  const {
    workspaces,
    handleWorkspaceSelection,
    handleMenuSelection,
    handleCloseWorkspace,
  } = useWorkspaces();

  const handleMessage = (event) => {
    send({ data: event.data, uuid });
  };

  const loadWidget = (selectedWorkspace) => {
    let selectedApp = apps?.find(
      (app) => app?.widget === selectedWorkspace?.widget
    );
    setComponent(React.lazy(loadRemoteComponent(selectedApp)));
  };

  useEffect(() => {
    const currentworkspaces =
      workspaces || JSON.parse(sessionStorage.getItem("workspaces"));
    const selectedWorkspace = currentworkspaces?.find(
      (workspace) => workspace.isSelected
    );
    if (selectedWorkspace) {
      loadWidget(selectedWorkspace);
    } else {
      setComponent(null);
    }
  }, [workspaces]);

  useEffect(() => {
    subscribe(handleMessage);
    return () => {
      unsubscribe(handleMessage);
    };
  }, []);

  return (
    <div
      className={`${mode === "light" ? "body" : "body-dark"} root-container`}
    >
      <TabsBar
        workspaces={workspaces}
        mode={mode}
        handleWorkspaceSelection={handleWorkspaceSelection}
        handleCloseWorkspace={handleCloseWorkspace}
      />
      <Navbar
        className="nav"
        {...{
          mode,
          toggleMode,
          menu,
          handleMenuSelection,
          workspaces,
        }}
      />
      <div className={mode === "light" ? "container" : "container-dark"}>
        {!Component && <About {...{ mode }} />}
        <div>
          <React.Suspense fallback={<FallbackComponent />}>
            <ShadowRoot style={widgetStyle}>
              {!!Component ? (
                <Component {...{ setWidgetStyle, widgetStyle, uuid, mode }} />
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

export default Shell;
