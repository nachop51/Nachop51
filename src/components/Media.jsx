import "./Media.css";
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

const ATag = ({ link, children }) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			title="{} icon link"
		>
			{children}
		</a>
	);
};

const Media = () => {
	return (
		<div className="media">
			<ul className="media__ul">
				<li>
					<ATag link="https://github.com/Nachop51/">
						<FiGithub />
					</ATag>
				</li>
				<li>
					<ATag link="https://www.instagram.com/nachop51/">
						<FiInstagram />
					</ATag>
				</li>
				<li>
					<ATag link="https://twitter.com/inach0f">
						<FiTwitter />
					</ATag>
				</li>
				<li>
					<ATag link="https://www.linkedin.com/in/ignacio-peralta-dev/">
						<FiLinkedin />
					</ATag>
				</li>
			</ul>
		</div>
	);
};

export default Media;
