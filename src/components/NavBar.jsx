import "./NavBar.css";

import React from "react";

const NavBar = () => {
  return (
    <ul className="nav-list">
      <li>
        <span className="links">About me</span>
      </li>
      <li>
        <span className="links">Projects</span>
      </li>
      <li>
        <span className="links">Contact</span>
      </li>
    </ul>
  );
};

export default NavBar;
