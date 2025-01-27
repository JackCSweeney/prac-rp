import React from "react";
import "../App.css";

const ContactModal = ({ setIsOpen }) => {
  return (
    <div className="actionsContainer">
      <div className="darkBG" onClick={() => setIsOpen(false)}></div>
      <div className="modal">
        <button id="closeModal" class="modal-close-btn" onClick={() => setIsOpen(false)}>Close</button>
        <p>Phone: 303-562-5601</p>
        <p>Email: JackCSweeney@gmail.com</p>
        <a href="https://www.linkedin.com/in/jackcsweeney/">LinkedIn</a>
      </div>
    </div>
  )
};

export default ContactModal;