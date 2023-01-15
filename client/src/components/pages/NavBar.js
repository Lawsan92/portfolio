import React, { useRef } from 'react';
import Logo from './Logo.js';
import { Link } from 'react-router-dom';
import { useTheme, useThemeUpdate } from '../ThemeContext.js';
import Contact from './Contact.js';

const NavBar = ({ contactRef, homeRef, skillsRef, projectsRef, experienceRef }) => {

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <section className={darkTheme ? 'navbar dark' : 'navbar'} ref={homeRef}>
      <Logo/>
      <div id='nav-buttons'>
        <Link to='/' ><h3 onClick={() => {homeRef.current.scrollIntoView({behavior: 'smooth'})}}>Home</h3></Link>
        <Link to='/skills' ><h3 onClick={() => {skillsRef.current.scrollIntoView({behavior: 'smooth'})}} >Skills</h3></Link>
        <Link to='/projects'><h3 onClick={() => {projectsRef.current.scrollIntoView({behavior: 'smooth'})}}>Projects</h3></Link>
        <Link to='/experience'><h3 onClick={() => {experienceRef.current.scrollIntoView({behavior: 'smooth'})}}>Experience</h3></Link>
      </div>
      <button className='navbar_themebutton' onClick={() => {toggleTheme()}} >
        {darkTheme ? <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1673766274/icons/dark-mode-6682_1_tluczz.svg'/> :
        <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1673766162/icons/dark-mode-6682_ncrhz2.svg'/>}
      </button>
      <Contact/>
    </section>
  )
}

export default NavBar;