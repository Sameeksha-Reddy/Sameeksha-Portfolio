import "./ProjectsDisplay.css"

import React from 'react'

const ProjectsDisplay = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image" />
    <h2 className="project-title">{props.title}</h2>
    <h4>{props.skills}</h4>
    <p>{props.text}</p>
    <div className="pro-btns">
        <button onClick={props.onViewClick} className="btn">
          View
        </button>
    </div>
</div>
  )
}

export default ProjectsDisplay;