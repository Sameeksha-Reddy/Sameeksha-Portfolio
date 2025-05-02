import "./Footer.css"
import {FaHome, FaMailBulk, FaLinkedin, FaGithub} from "react-icons/fa"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer"> 
        <div className="footer-container">
                </div>
                    <div className="email">
                    <h4><a href="mailto:sameekshareddyv@gmail.com">
                        <FaMailBulk className="icon" />
                        sameekshareddyv@gmail.com
                        </a>
                    </h4>
                    </div>
                
                <div className="social">
                <a
          href="https://www.linkedin.com/in/sameeksha-reddy-746650198/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://github.com/Sameeksha-Reddy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
                </div>
        </div>
  )
}

export default Footer;