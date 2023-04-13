import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewApp from "./NewApp";

const App = ({apps, menu, mode, setMode}) => {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<NewApp apps={apps} menu={menu} mode={mode} setMode={setMode}/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
