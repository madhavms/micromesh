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
import { loadRemoteComponent } from "./helpers/remoteLoader";

const Shell = ({ apps, menu, toggleMode, mode }) => {
  const [Component, setComponent] = useState(null);
  const [widgetStyle, setWidgetStyle] = useState("");
  const [uuid, setuuid] = useState(uuidv4());
  const [workspaces, setWorkspaces] = useState(
    JSON.parse(sessionStorage.getItem("workspaces")) || []
  );

  const handleMessage = (event) => {
    send({ data: event.data, uuid });
  };

  const handleMenuSelection = (label, appId) => {

    let existingWorkspace = workspaces.find(
      (workspace) => workspace.appId === appId
    );

    if (existingWorkspace) {
      let newLabel = label;
      let count = 1;
      let newWorkspace = {};

      let duplicateWorkspaces = workspaces.filter((workspace) =>
        workspace.label.startsWith(label)
      );
      if (duplicateWorkspaces.length > 0) {
        console.log("duplicateWorkspaces=", duplicateWorkspaces);
        count = duplicateWorkspaces.length + 1;
        newLabel = `${label} (${count - 1})`;
        newWorkspace = {
          appId: existingWorkspace.appId,
          label: newLabel,
          isSelected: true,
        };
      }

      const updatedWorkspaces = workspaces.map((workspace) => ({
        ...workspace,
        isSelected: workspace.label === newLabel,
      }));
      setWorkspaces([...updatedWorkspaces, newWorkspace]);
      sessionStorage.setItem(
        "workspaces",
        JSON.stringify([...updatedWorkspaces, newWorkspace])
      );

      let app = apps.find((app) => app.appId === appId);
      if (app) {
        setComponent(React.lazy(loadRemoteComponent(app)));
      }
    } else {
      const updatedWorkspaces = workspaces.map((workspace) => ({
        ...workspace,
        isSelected: false,
      }));
      setWorkspaces([
        ...updatedWorkspaces,
        { appId, label: label, isSelected: true },
      ]);
      sessionStorage.setItem(
        "workspaces",
        JSON.stringify([
          ...updatedWorkspaces,
          { appId, label: label, isSelected: true },
        ])
      );

      let app = apps.find((app) => app.appId === appId);
      if (app) {
        setComponent(React.lazy(loadRemoteComponent(app)));
      }
    }
  };

  const handleCloseTab = (label) => {
    const updatedWorkspaces = workspaces?.filter(
      (workspace) => workspace.label !== label
    );

    console.log("label=", label);

    if (updatedWorkspaces.length === 0) {
      setComponent(null);
      setWorkspaces(updatedWorkspaces);
      sessionStorage.setItem("workspaces", JSON.stringify(updatedWorkspaces));
      return;
    }
    if (
      workspaces.find(
        (workspace) => workspace.label === label && workspace.isSelected
      )
    ) {
      console.log("workspaces=", workspaces);
      const selectedIndex = workspaces?.findIndex(
        (workspace) => workspace.label === label
      );
      const newSelectedIndex = Math.max(selectedIndex - 1, 0);
      const newSelectedWorkspace = updatedWorkspaces[newSelectedIndex];

      if (newSelectedWorkspace) {
        let app = apps.find((app) => app.appId === newSelectedWorkspace.appId);
        updatedWorkspaces[newSelectedIndex].isSelected = true;
        if (app) {
          setComponent(React.lazy(loadRemoteComponent(app)));
          setWorkspaces(updatedWorkspaces);
          sessionStorage.setItem(
            "workspaces",
            JSON.stringify(updatedWorkspaces)
          );
        }
      }
    }
    setWorkspaces(updatedWorkspaces);
    sessionStorage.setItem("workspaces", JSON.stringify(updatedWorkspaces));
  };

  const handleTabSelection = (label) => {
    const selectedWorkspace = workspaces.find(
      (workspace) => workspace.label === label
    );

    if (selectedWorkspace?.isSelected) {
      return;
    }

    if (selectedWorkspace) {
      const updatedWorkspaces = workspaces.map((workspace) => ({
        ...workspace,
        isSelected: workspace.label === selectedWorkspace.label,
      }));

      setWorkspaces(updatedWorkspaces);
      sessionStorage.setItem("workspaces", JSON.stringify(updatedWorkspaces));

      let app = apps.find((app) => app.appId === selectedWorkspace.appId);
      if (app) {
        setComponent(React.lazy(loadRemoteComponent(app)));
      }
    }
  };

  const loadCachedWidget = (selectedApp) => {
    setComponent(React.lazy(loadRemoteComponent(selectedApp)));
  };

  useEffect(() => {
    const workspaces = JSON.parse(sessionStorage.getItem("workspaces"));
    const selectedTab = workspaces?.find((workspace) => workspace.isSelected);
    let apps = JSON.parse(sessionStorage.getItem("apps")) || [];
    let selectedApp = apps?.find((app) => app?.appId === selectedTab?.appId);
    if (selectedApp) {
      loadCachedWidget(selectedApp);
    }
  }, []);

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
        handleTabSelection={handleTabSelection}
        handleCloseTab={handleCloseTab}
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
        {!workspaces.length && <About {...{ mode }} />}
        <div>
          <React.Suspense fallback={<MyFallbackComponent />}>
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
