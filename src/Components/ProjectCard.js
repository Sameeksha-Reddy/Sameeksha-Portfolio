
import ProjectCardData from "./ProjectCardData";
import ProjectsDisplay from "./ProjectsDisplay/ProjectsDisplay";
import ProjectViewData from "./ProjectView/ProjectViewData";
import React, { useState } from 'react';

const ProjectCard = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewClick = (projectTitle) => {
    const project = ProjectViewData.find(p => p.title === projectTitle);
    setSelectedProject(project);
  };

  if (selectedProject) {
    return (
      <div style={{ color: "white" }}>
        <div className="viewLeftRight">
          <div className="viewLeft">
            <h1 className="project-title">{selectedProject.title}</h1>
            <p>{selectedProject.text}</p>
            <p><strong>Skills:</strong> {selectedProject.skills}</p>
          </div>
          <div className="ViewRight">
            <div className="pro-btns">
            <button onClick={() => setSelectedProject(null)} className="btn" style={{ margin: "2rem" }}>Back</button>
            </div>
          </div>
        </div>
        <div className="fullContainer">
          {selectedProject.imgsrc1 && (
            <div className="viewContainer">
              <img src={selectedProject.imgsrc1} alt={selectedProject.title} className="viewDataImg" />
              <p className="viewPara">{selectedProject.screenName1}</p>
            </div>
          )}
          {selectedProject.imgsrc2 && (
            <div className="viewContainer">
              <img src={selectedProject.imgsrc2} alt={selectedProject.title} className="viewDataImg" />
              <p className="viewPara">{selectedProject.screenName2}</p>
            </div>
          )}
          {selectedProject.imgsrc3 && (
            <div className="viewContainer">
              <img src={selectedProject.imgsrc3} alt={selectedProject.title} className="viewDataImg" />
              <p className="viewPara">{selectedProject.screenName3}</p>
            </div>
          )}
          {selectedProject.imgsrc4 && (
            <div className="viewContainer">
              <img src={selectedProject.imgsrc4} alt={selectedProject.title} className="viewDataImg" />
              <p className="viewPara">{selectedProject.screenName4}</p>
            </div>
          )}
          {selectedProject.imgsrc5 && (
            <div className="viewContainer">
              <img src={selectedProject.imgsrc5} alt={selectedProject.title} className="viewDataImg" />
              <p className="viewPara">{selectedProject.screenName5}</p>
            </div>
          )}
          {selectedProject.imgsrc6 && (
            <div className="viewContainer">
              <img src={selectedProject.imgsrc6} alt={selectedProject.title} className="viewDataImg" />
              <p className="viewPara">{selectedProject.screenName6}</p>
            </div>
          )}
          {selectedProject.imgsrc7 && (
            <div className="viewContainer">
              <img src={selectedProject.imgsrc7} alt={selectedProject.title} className="viewDataImg" />
              <p className="viewPara">{selectedProject.screenName7}</p>
            </div>
          )}
          {selectedProject.imgsrc8 && (
            <div className="viewContainer">
              <img src={selectedProject.imgsrc8} alt={selectedProject.title} className="viewDataImg" />
              <p className="viewPara">{selectedProject.screenName8}</p>
            </div>
          )}
          {selectedProject.imgsrc9 && (
            <div className="viewContainer">
              <img src={selectedProject.imgsrc9} alt={selectedProject.title} className="viewDataImg" />
              <p className="viewPara">{selectedProject.screenName9}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="project-container">
        {ProjectCardData.map((val, ind) => {
          return (
            <ProjectsDisplay
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              skills={val.skills}
              text={val.text}
              onViewClick={() => handleViewClick(val.title)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
