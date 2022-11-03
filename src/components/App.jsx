import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";

import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
