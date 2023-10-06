import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi'
import Home from './Home'
import './Media.css'
import NavBar from './NavBar'
import './App.css'

const mediaIcons = [
  { name: 'Github', link: 'https://github.com/Nachop51/', icon: <FiGithub /> },
  {
    name: 'Instagram',
    link: 'https://instagram.com/nachop51/',
    icon: <FiInstagram />,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/inach0f',
    icon: <FiTwitter />,
  },
  {
    name: 'Linkedin',
    link: 'https://linkedin.com/in/ignacio-peralta-dev/',
    icon: <FiLinkedin />,
  },
]

function App() {
  return (
    <>
      <NavBar />
      <Home />

      {/* Media Icons */}
      <div className="media">
        <ul className="media__ul">
          {mediaIcons.map((icon) => (
            <li key={icon.name}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                {icon.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
