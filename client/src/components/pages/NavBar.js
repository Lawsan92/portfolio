import React, { useRef } from 'react';

const NavBar = ({ contactRef, homeRef, skillsRef, projectsRef }) => {

  return (
    <section id='navbar'>
      <div id='name'>
      <h1>Lawrence Sanzogni</h1>
      </div>
      <div id='nav-buttons'>
        <h3 onClick={() => {homeRef.current.scrollIntoView()}}>Home</h3>
        <h3 onClick={() => {skillsRef.current.scrollIntoView()}}>Skills</h3>
        <h3 onClick={() => {projectsRef.current.scrollIntoView()}}>Projects</h3>
        <h3 onClick={() => {contactRef.current.scrollIntoView()}}>Contact Me</h3>
      </div>
    </section>
  )
}

export default NavBar;