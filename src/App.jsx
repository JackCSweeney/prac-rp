import './App.css'
import ContactModal from './components/ContactModal'
import React, {useState} from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Jack Sweeney - Software Engineer</h1>
      <button onClick={() => setIsOpen(true)}>Contact Information</button>
      {isOpen && <ContactModal setIsOpen={setIsOpen}/>}
    </div>
    
  );
}

export default App
