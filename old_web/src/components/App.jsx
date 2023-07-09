import "./App.css";
import NavBar from "./NavBar";
import Media from "./Media";
import Home from "./Home";
import Copy from "./Copy";

import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Media />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Copy />
    </>
  );
};

export default App;
