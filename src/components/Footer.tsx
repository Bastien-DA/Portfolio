import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faGithub, faLinkedin);


export function Footer() {
    return (
        <footer>
            <ul className="social-links">
                <li>
                    <a href="https://www.github.com/Bastien-DA" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/bastien-de-amezaga-b840772a8" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>
        </footer>
    );
}