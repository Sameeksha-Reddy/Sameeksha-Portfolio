import React from 'react'
import ProjectsComponent from '../../Components/ProjectsComponent/ProjectsComponent'
import NavBar from '../../Components/NavBar/NavBar'
import ProjectCard from '../../Components/ProjectCard'
const Projects = () => {
  return (
    <div>
      <NavBar/>
      <ProjectsComponent heading="PROJECTS" />
      <ProjectCard/>
    </div>
  )
}

export default Projects