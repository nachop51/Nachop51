import './NavBar.css'

import { Link } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About me', path: '/about_me' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
]

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const renderedLinks = links.map((link) => {
    return (
      <li key={link.name}>
        <Link to={link.path} className="links">
          <span>{link.name}</span>
        </Link>
      </li>
    )
  })

  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <ul className="nav-list">{renderedLinks}</ul>
      </div>
      <button className="menu-button" onClick={() => setShowMenu(!showMenu)}>
        <span className={`${showMenu ? 'active' : 'menu-icon'}`}></span>
      </button>
    </nav>
  )
}

export default NavBar
