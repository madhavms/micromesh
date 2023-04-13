import React, { StrictMode, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";

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

async function renderApp() {
  const { apps, menu } = await fetchData();

  ReactDOM.render(<App apps={apps} menu={menu} />, rootElement);
}

renderApp();
