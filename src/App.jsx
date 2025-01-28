import './App.css'
import ContactModal from './components/ContactModal'
import React, {useState} from 'react'
import TextChanger from './components/TextChanger'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const titles = ['Software Engineer', 'Enthusiastic Communicator', 'Chef', 'Music Nerd']

  return (
    <div>
      <h1>Jack Sweeney<TextChanger texts={titles} interval={2000}/></h1>
      <button onClick={() => setIsOpen(true)}>Contact Information</button>
      {isOpen && <ContactModal setIsOpen={setIsOpen}/>}
    </div>
    
  );
}

export default App
