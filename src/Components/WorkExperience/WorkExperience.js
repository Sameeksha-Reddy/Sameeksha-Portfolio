import "./WorkExperience.css";
import Altair from "./assets/Altair.png";
import Ermin from "./assets/Ermin.png";
import React from "react";

const WorkExperience = () => {
  return (
    <div className="WorkExp">
      <h2 className="section-title">Work Experience</h2>

      <div className="des">Full-stack software developer with 3+ years of experience in both front-end and back-end technologies, including Java, Python, TypeScript, and SQL. Designed and developed web applications using React.js, Spring Boot, and FastAPI, prioritizing secure API integration, and implemented software solutions that align with UX design patterns. Designed and implemented adaptable software solutions using PMS to improve system efficiency and scalability ensuring high reliability, resulting in improved business operations, customer service, and user experience. Worked in agile environment and collaborated across departments to build innovative products.</div>

      <div className="experience-card">
        <div className="company-name">Inspirix Technologies LLC</div>
        <div className="position">Software Development Engineer</div>
        <div className="location">Remote</div>
        <div className="time-frame">Jan 2024 - Present</div>
        <div className="exp">
        • Developed a real-time inventory tracking solution that tracks items in real time, ensuring accurate, up-to-date inventory data.<br />
        • Developed and maintained Distributed Systems, utilizing cloud-based technologies to enhance scalability and performance.<br />
        • Engineered RESTful APIs with FastAPI and PostgreSQL for data management, stock updates, and role-based access control.<br />
        • Automated batch-level tracking and smart reorder alerts using predictive analytics, reducing manual inventory checks improving stock accuracy.<br />    
        </div>
      </div>

      <div className="experience-card">
        <div className="company-name">Altair</div>
        <div className="position">Software Developer</div>
        <div className="location">Hyderabad, India</div>
        <div className="time-frame">August 2022 - July 2023</div>
        <div className="exp">
        • Enhanced front-end functionality and optimized performance using advanced React JS knowledge. <br />
        • Collaborated with senior developers to follow agile development methodologies and implement algorithms for complex software systems.<br />
        • Designed views, grids, buttons, and team pages improving UI flexibility by 10% with intuitive switching options using object-oriented design, enhancing user interaction.<br />
        • Integrated a search bar for filtering projects by name and owner, improving data retrieval speed by 10%. <br />
        • Developed the Activity Page to track user actions like creating, deleting, adhering to the regulatory standards.
        </div>
      </div>

      <div className="experience-card">
        <div className="company-name">RSSC Solutions</div>
        <div className="position">Full Stack Developer</div>
        <div className="location">Chennai, India</div>
        <div className="time-frame">July 2021 - August 2022</div>
        <div className="exp">
        • Coordinated with senior developers to develop Visitor Management System for streamlined visitor tracking. <br />
        • Designed and integrated role-based access control ensuring secure and efficient management of visitor data.<br />
        • Developed an intuitive admin dashboard for managing users, access permissions, and system logs efficiently. <br />
        • Utilized continuous integration practices to enhance collaboration and reduce development time among cross-functional teams. <br />
        • Developed and maintained CI/CD infrastructure to ensure seamless integration and deployment of software application.<br />
        • Integrated QR code-based check-in system to enhance security and minimize manual data entry.

        </div>
      </div>

      <div className="experience-card">
        <div className="company-name">Ermin Automotive</div>
        <div className="position">Front-end Flutter Developer</div>
        <div className="location">Hyderabad, India</div>
        <div className="time-frame">April 2021 - June 2021</div>
        <div className="exp">
        • Worked in a team-oriented environment and crafted an intuitive user interface to solve complex problems.<br />
        • Streamlined the development process and enhanced user engagement and customer experience.<br />
        • Demonstrated strong collaboration skills and communication skills, demonstrating a team-oriented approach.<br />
        • Demonstrated analytical skills contributing to the improvement in user interface responsiveness.<br />
        • Applied source control management techniques to maintain code quality, reduce errors, and enhance development processes.
        </div>
      </div>

    </div>
  );
};

export default WorkExperience;
