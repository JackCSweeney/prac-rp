import React from "react"
import "../../App.css"
import { Card } from "@mui/material"


const ProjectCard = ({ project }) => {
  return (
    <div>
      <Card style={{ minWidth: 275, maxWidth: 400, color: 'black', bgcolor: 'lightgray', borderColor: 'black', maxHeight: 500}} id='project-description'>
        <div>
          <div>
            <img src={project.imagePath} className='header-image'/>
          </div>
        </div>
        <h3>Tech Stack: {project.techStack}</h3>
        <div>{project.description}</div>
        <a href={project.githubLink}>GitHub Repository</a>
      </Card>
    </div>
  )
}
export default ProjectCard