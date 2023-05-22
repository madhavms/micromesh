import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shell from "./Shell";

const App = ({apps, menu, mode, setMode}) => {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<Shell apps={apps} menu={menu} mode={mode} setMode={setMode}/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
