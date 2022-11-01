import React, { useRef } from 'react';

const NavBar = ({ contactRef }) => {

  return (
    <section id='navbar'>
      <div id='name'>
      <h1>Lawrence Sanzogni</h1>
      </div>
      <div id='nav-buttons'>
        <h3 id='nav-button'>Home</h3>
        <h3 id='nav-button'>About</h3>
        <h3 id='nav-button'>Skills</h3>
        <h3 id='nav-button'>Projects</h3>
        <h3 id='nav-button'>Education</h3>
        <h3 id='nav-button' onClick={() => {contactRef.current.scrollIntoView()}}>Contact Me</h3>
      </div>
    </section>
  )
}

export default NavBar;