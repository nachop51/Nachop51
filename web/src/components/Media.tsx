import "./Media.css"
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi"

const Media = () => {
  return (
    <div className="media">
      <ul className="media__ul">
        <li>
          <a
            href="https://github.com/Nachop51/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/nachop51/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/inach0f"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/ignacio-peralta-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Media
