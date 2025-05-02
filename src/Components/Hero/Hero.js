import "./Hero.css";
import Profile_Picture from './assets/Profile_Picture.png';
import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="my_text">
        <div className="my_name">Velangini Sameeksha Reddy Khambam</div>
        </div>
        <div className="hero1">
        <div className="hero_img">
        <div className="image_bubble">
          <img src={Profile_Picture} alt="Profile" />
        </div>
      </div>
        <div className="my_para">
        Full-stack software developer with 3+ years of experience in both front-end and back-end technologies, including Java, Python, TypeScript, and SQL. Designed and developed web applications using React.js, Spring Boot, and FastAPI, prioritizing secure API integration, and implemented software solutions that align with UX design patterns. Designed and implemented adaptable software solutions using PMS to improve system efficiency and scalability ensuring high reliability, resulting in improved business operations, customer service, and user experience. Worked in agile environment and collaborated across departments to build innovative products.
        </div>
        </div>
      </div>
  );
};

export default Hero;
