import './App.css'
import ContactModal from './components/ContactModal/ContactModal'
import React, {useState} from 'react'
import TextChanger from './components/Helpers/TextChanger'
import Projects from './components/Projects/Projects'
import ProjectCard from './components/Projects/ProjectCard'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const titles = ['SOFTWARE ENGINEER', 'ENTHUSIASTIC COMMUNICATOR', 'CHEF', 'MUSIC NERD']
  var projects = Projects

  return (
    <div>
      <h1>JACK SWEENEY</h1>
      <h1>
        <TextChanger texts={titles} interval={2000}/>
      </h1>
      <button onClick={() => setIsOpen(true)}>Contact Information</button>
      {isOpen && <ContactModal setIsOpen={setIsOpen}/>}
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <ProjectCard project={projects[0]}/>
        <ProjectCard project={projects[1]}/>
        <ProjectCard project={projects[2]}/>
        <ProjectCard project={projects[3]}/>
      </div>
    </div>
  );
}

export default App
