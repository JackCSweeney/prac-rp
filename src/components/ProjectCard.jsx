import React from "react"
import "../App.css"
import { Card } from "@mui/material"


const ProjectCard = ({ project }) => {
  return (
    <div>
    <Card sx={{ minWidth: 275, maxWidth: 400, color: 'black', bgcolor: 'lightgray', borderColor: 'black' }}>
      <div>
        <div>
          <img src={project.imagePath} className='header-image'/>
        </div>
      </div>
      {/* <h1>{project.title}</h1> */}
      <h3>Tech Stack: {project.techStack}</h3>
      <p>{project.description}</p>
      <a href={project.githubLink}>GitHub Repository</a>
    </Card>
    </div>
  )
}
export default ProjectCard