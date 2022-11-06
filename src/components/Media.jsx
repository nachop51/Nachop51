import "./Media.css";
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

const Media = () => {
  return (
    <div className="media">
      <ul className="media__ul">
        <li>
          <a href="https://github.com/Nachop51/">
            <FiGithub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/nachop51/">
            <FiInstagram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/inach0f">
            <FiTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ignacio-peralta-dev/">
            <FiLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Media;
