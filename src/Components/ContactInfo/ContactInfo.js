import "./ContactInfo.css";
import { FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";
import profile_picture from "./assets/Profile_Picture.png"

const ContactInfo = () => {
  return (
    <div className="contact-container">
      <div className="image-section">
        <img src={profile_picture} alt="Profile" />
      </div>
      <div className="info-box">
        <div className="info-header">
          <h2>Velangini Sameeksha Reddy Khambam</h2>
        </div>
        <div className="email-section">
          <a href="mailto:sameekshareddyv@gmail.com" className="email-link">
            sameekshareddyv@gmail.com
          </a>
        </div>
        <div className="icon-section">
          <a href="https://www.linkedin.com/in/sameeksha-reddy-746650198/">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://github.com/Sameeksha-Reddy">
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
