import './App.css'
import ContactModal from './components/ContactModal'
import React, {useState} from 'react'
import TextChanger from './components/TextChanger'
import Projects from './components/Projects'
import ProjectCard from './components/ProjectCard'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const titles = ['Software Engineer', 'Enthusiastic Communicator', 'Chef', 'Music Nerd']
  var projects = Projects

  return (
    <div>
      <h1>Jack Sweeney</h1>
      <h1>
        <TextChanger texts={titles} interval={2000}/>
      </h1>
      <button onClick={() => setIsOpen(true)}>Contact Information</button>
      {isOpen && <ContactModal setIsOpen={setIsOpen}/>}
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <ProjectCard project={projects[0]}/>
      </div>
    </div>
    
    
  );
}

export default App
