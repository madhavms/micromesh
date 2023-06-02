import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shell from "./Shell";

const App = ({apps, menu, toggleMode, mode}) => {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<Shell apps={apps} menu={menu} toggleMode={toggleMode} mode={mode}/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
