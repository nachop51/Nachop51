import "./App.css";
import NavBar from "./NavBar";

import React from "react";

const App = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-3xl font-light">
        Hi, my name is <b>Nacho</b>
        <span>.</span>
      </h1>
      <p>
        I'm a <strong>full-stack developer</strong> from <b>Uruguay</b>.
      </p>
    </>
  );
};

export default App;
