import React, { useRef } from 'react';

const NavBar = ({ contactRef, homeRef, skillsRef, projectsRef, experienceRef }) => {

  return (
    <section id='navbar' ref={homeRef}>
      <div id='name'>
      {/* <h1>Lawrence Sanzogni</h1> */}
      </div>
      <div id='nav-buttons'>
        <h3 onClick={() => {homeRef.current.scrollIntoView({behavior: 'smooth'})}}>Home</h3>
        <h3 onClick={() => {skillsRef.current.scrollIntoView({behavior: 'smooth'})}}>Skills</h3>
        <h3 onClick={() => {projectsRef.current.scrollIntoView({behavior: 'smooth'})}}>Projects</h3>
        <h3 onClick={() => {experienceRef.current.scrollIntoView({behavior: 'smooth'})}}>Experience</h3>
        <h3 onClick={() => {contactRef.current.scrollIntoView({behavior: 'smooth'})}}>Contact Me</h3>
      </div>
    </section>
  )
}

export default NavBar;