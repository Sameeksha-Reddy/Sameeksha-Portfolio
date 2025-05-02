import "./Study.css";
import React from "react";
import uncc from "./assets/UNCC.png"
import vitap from "./assets/vitap.png"

const Study = () => {
  return (
    <div className="study-container">
      <h2 className="section-title">Education</h2>

      <div className="study-card">
        <img src={uncc} alt="University of North Carolina" className="university-logo" />
        <div className="university-name">University of North Carolina - Charlotte</div>
        <div className="degree">Masters in Computer Science</div>
        <div className="location">Charlotte, North Carolina, USA</div>
        <div className="cgpa">CGPA: 3.90/4.0</div>
        <div className="courses">
          Courses: Algorithm & Data Structures, Visual Analytics, Database Systems, Network Based Application Development, Knowledge Discovery in Databases, Software System Design & Implementation, Big Data Analytics for Competitive Advantage, Information Visualization, Computer Communications and Networks, Intelligent Systems
        </div>
      </div>

      <div className="study-card">
        <img src={vitap} alt="Vellore Institute of Technology" className="university-logo" />
        <div className="university-name">Vellore Institute of Technology</div>
        <div className="degree">Bachelor of Science in Computer Science</div>
        <div className="location">Amaravati, Andhra Pradesh, India</div>
        <div className="cgpa">CGPA: 8.74/10.0</div>
        <div className="courses">
          Courses: Data Structures and Algorithms, Software Engineering, Object Oriented Programming, Artificial Intelligence, Database Management Systems, Introduction to Machine Learning, Web Technologies, Operating Systems, Product Definition and Validation, Critical Thinking Skills
        </div>
      </div>
    </div>
  );
};

export default Study;
