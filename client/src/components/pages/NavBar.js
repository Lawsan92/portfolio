import React, { useRef } from 'react';
import Logo from './Logo.js';

const NavBar = ({ contactRef, homeRef, skillsRef, projectsRef, experienceRef }) => {

  return (
    <section id='navbar' ref={homeRef}>
      <Logo/>
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