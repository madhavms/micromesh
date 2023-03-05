import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewApp from "./NewApp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<NewApp/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
