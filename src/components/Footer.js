import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import 'animate.css';
import './Footer.css';

function Footer() {
    return (
        <footer className="d-flex align-items-center justify-content-center">&copy; {(new Date()).getFullYear()}, Made with
            <span id="heart-icon" className="px-1 animated infinite pulse delay-2s" role="img" aria-label="heart icon">
                <FontAwesomeIcon icon={faHeart}/>
            </span> by Clarence Love
            <span className="px-1" role="img" aria-label="arrow icon">
                <FontAwesomeIcon icon={faArrowRight}/>
            </span>
            <a href="https://github.com/clarenceOnline" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </footer>
  );
}

export default Footer;