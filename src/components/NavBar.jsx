import "./NavBar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/">
              <span className="links">Home</span>
            </Link>
          </li>
          <li>
            <Link to="about_me">
              <span className="links">About me</span>
            </Link>
          </li>
          <li className="menu"></li>
          <li>
            <Link to="work">
              <span className="links">Work</span>
            </Link>
          </li>
          <li>
            <Link to="contact">
              <span className="links">Contact</span>
            </Link>
          </li>
        </ul>
        <button className="menu-button">-</button>
      </nav>
    </header>
  );
};

export default NavBar;
