import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import LoadingSquare from "./components/LoadingSquare";

const rootElement = document.getElementById("root");

async function fetchData() {
  const [apps, menu] = await Promise.all([
    fetch(`${process.env.FIN_API_URL}/widgets`).then((response) =>
      response.json()
    ),
    fetch(`${process.env.FIN_API_URL}/menu`).then((response) =>
      response.json()
    ),
  ]);

  if (apps["detail"] === "Not Found") {
    sessionStorage.setItem("apps", JSON.stringify([]));
    apps = [];
  } else {
    sessionStorage.setItem("apps", JSON.stringify(apps));
  }

  if (menu["detail"] === "Not Found") {
    menu = [];
  }

  return { apps, menu };
}

function AppContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [apps, setApps] = useState([]);
  const [menu, setMenu] = useState([]);
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    async function loadData() {
      const { apps, menu } = await fetchData();

      setApps(apps);
      setMenu(menu);

      setTimeout(() => {
        setIsLoading(false);
        setIsTransitioning(true);
      }, 800);
    }

    loadData();
  }, []);

  return isLoading ? (
    <div
      className={`${mode === "light" ? "body" : "body-dark"} root-container`}
    >
      <LoadingSquare />
    </div>
  ) : (
    <App apps={apps} menu={menu} mode={mode} setMode={setMode} />
  );
}

async function renderApp() {
  await new Promise((resolve) => {
    ReactDOM.render(<AppContainer />, rootElement, resolve);
  });
}

renderApp();
