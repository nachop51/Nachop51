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

  const renderedLinks: JSX.Element[] = [] // links.map((link) => {
  //   return (
  //     <li key={link.name}>
  //       <Link to={link.path} className="nav__ul--links">
  //         <span>{link.name}</span>
  //       </Link>
  //     </li>
  //   )
  // })

  renderedLinks.splice(
    2,
    0,
    <li key="menu">
      <button className="nav__menu" onClick={() => setShowMenu(!showMenu)}>
        <span className={`menu-icon ${showMenu ? 'active' : ''}`}></span>
      </button>
    </li>
  )

  return (
    <nav className="nav">
      <ul className="nav__ul">{renderedLinks}</ul>
    </nav>
  )
}

export default NavBar
