import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./styles.css";
import ShadowRoot from "./utils/ShadowRoot";
import { v4 as uuidv4 } from "uuid";
import FallbackComponent from "./components/Placeholder";
import Footer from "./components/Footer";
import About from "./components/AboutScreen";
import TabsBar from "./components/TabsBar";
import { loadRemoteComponent } from "./helpers/remoteLoader";
import { useWorkspaces } from "./helpers/workspaceHelper";

const Shell = ({ apps, menu, toggleMode, mode }) => {
  const [Component, setComponent] = useState(null);
  const [widgetStyle, setWidgetStyle] = useState("");
  const [uuid, setuuid] = useState(uuidv4());
  const {
    workspaces,
    handleWorkspaceSelection,
    handleMenuSelection,
    handleCloseWorkspace,
  } = useWorkspaces({ apps });

  const loadWidget = (selectedWorkspace) => {
    const selectedApp = apps.find(
      (app) => app.widget === selectedWorkspace.widget
    );
    const selectedTemplate = selectedApp.template;
    const widgetsPromises = [];

    selectedTemplate.widgets.forEach((widget, index) => {
      const selectedWidget = apps.find((app) => app.widget === widget.widget);
      const subWidget = selectedWidget.template.widgets.find((app) => app.widget === widget.widget);
      const widgetInfo = {
        url: selectedWidget.url,
        scope: subWidget.scope,
        widget: subWidget.widget
      }
      const widgetPromise = loadRemoteComponent(widgetInfo)()
        .then((module) => module.default)
        .catch((error) => {
          console.error("Error loading widget:", error);
          return null;
        });

      widgetsPromises.push(widgetPromise);
    });

    Promise.all(widgetsPromises)
      .then((components) => {
        // components array will contain all the loaded widget components
        // compose the components and place them in a container
        const ComposedComponent = () => (
          <React.Fragment>
            {selectedTemplate.layouts.map((layout, index) => {
              const Component = components[index];
              return (
                Component && (
                  <div
                    key={index}
                    style={{
                      top: layout.y,
                      left: layout.x,
                      width: layout.w,
                      height: layout.h,
                    }}
                  >
                    <Component
                    {...{ setWidgetStyle, widgetStyle, uuid, mode }}
                    />
                  </div>
                )
              );
            })}
          </React.Fragment>
        );

        setComponent(() => ComposedComponent);
      })
      .catch((error) => {
        console.error("Error loading widgets:", error);
      });
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
        {!Component && workspaces.length === 0 && <About {...{ mode }} />}
        <div>
          <React.Suspense fallback={<FallbackComponent />}>
            <ShadowRoot style={widgetStyle}>
              {!!Component ? <Component/> : <div></div>}
            </ShadowRoot>
          </React.Suspense>
        </div>
      </div>
      <Footer {...{ mode }} />
    </div>
  );
};

export default Shell;
