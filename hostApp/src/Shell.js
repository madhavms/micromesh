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

  const handleMenuSelection = (label, widget) => {

    let existingWorkspace = workspaces.find(
      (workspace) => workspace.widget === widget
    );

    if (existingWorkspace) {
      let newLabel = label;
      let count = 1;
      let newWorkspace = {};

      let duplicateWorkspaces = workspaces.filter((workspace) =>
        workspace.label.startsWith(label)
      );
      if (duplicateWorkspaces.length > 0) {
        count = duplicateWorkspaces.length + 1;
        newLabel = `${label} (${count - 1})`;
        newWorkspace = {
          widget: existingWorkspace.widget,
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

      let app = apps.find((app) => app.widget === widget);
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
        { widget, label: label, isSelected: true },
      ]);
      sessionStorage.setItem(
        "workspaces",
        JSON.stringify([
          ...updatedWorkspaces,
          { widget, label: label, isSelected: true },
        ])
      );

      let app = apps.find((app) => app.widget === widget);
      if (app) {
        setComponent(React.lazy(loadRemoteComponent(app)));
      }
    }
  };

  const handleCloseWorkspace = (label) => {
    const updatedWorkspaces = workspaces?.filter(
      (workspace) => workspace.label !== label
    );
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
      const selectedIndex = workspaces?.findIndex(
        (workspace) => workspace.label === label
      );
      const newSelectedIndex = Math.max(selectedIndex - 1, 0);
      const newSelectedWorkspace = updatedWorkspaces[newSelectedIndex];

      if (newSelectedWorkspace) {
        let app = apps.find((app) => app.widget === newSelectedWorkspace.widget);
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

  const handleWorkspaceSelection = (label) => {
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

      let app = apps.find((app) => app.widget === selectedWorkspace.widget);
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
    let selectedApp = apps?.find((app) => app?.widget === selectedTab?.widget);
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
        {!workspaces.length && <About {...{ mode }} />}
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
