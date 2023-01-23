import React, { useRef } from 'react';
import Logo from './Logo.js';
import { Link } from 'react-router-dom';
import { useTheme, useThemeUpdate } from '../ThemeContext.js';
import SVGicons, { MobileSVGicons } from './SVGicons';

export const MobileNavbar = () => {

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <section className={darkTheme ? 'navbar mobile dark' : 'navbar mobile'}>
      <Logo/>
      <div className='nav-buttons mobile'>
        <Link to='/'>
          <h3 className='nav-buttons mobile entry'>Home</h3>
        </Link>
        <Link to='/skills'>
          <h3 className='nav-buttons mobile entry'>Skills</h3>
        </Link>
        <Link to='/projects'>
          <h3 className='nav-buttons mobile entry'>Projects</h3>
        </Link>
        <Link to='/experience'>
          <h3 className='nav-buttons mobile entry'>Experience</h3>
        </Link>
        <Link to='/contact'>
          <h3 className='nav-buttons mobile entry'>Contact</h3>
        </Link>
      </div>
      <button className={ darkTheme ? 'navbar_themebutton dark' : 'navbar_themebutton'} onClick={() => {toggleTheme()}} >
        {darkTheme ? <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1673766274/icons/dark-mode-6682_1_tluczz.svg'/> :
        <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1673766162/icons/dark-mode-6682_ncrhz2.svg'/>}
      </button>
      <MobileSVGicons/>
    </section>
  )
}

const NavBar = ({ contactRef, homeRef, skillsRef, projectsRef, experienceRef }) => {

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <section className={darkTheme ? 'navbar dark' : 'navbar'} ref={homeRef}>
      <Logo/>
      <div className='nav-buttons'>
        <Link to='/' ><h3 onClick={() => {homeRef.current.scrollIntoView({behavior: 'smooth'})}}>Home</h3></Link>
        <Link to='/skills' ><h3 onClick={() => {skillsRef.current.scrollIntoView({behavior: 'smooth'})}} >Skills</h3></Link>
        <Link to='/projects'><h3 onClick={() => {projectsRef.current.scrollIntoView({behavior: 'smooth'})}}>Projects</h3></Link>
        <Link to='/experience'><h3 onClick={() => {experienceRef.current.scrollIntoView({behavior: 'smooth'})}}>Experience</h3></Link>
        <Link to='/contact'><h3 onClick={() => {experienceRef.current.scrollIntoView({behavior: 'smooth'})}}>Contact</h3></Link>
      </div>
      <button className={ darkTheme ? 'navbar_themebutton dark' : 'navbar_themebutton'} onClick={() => {toggleTheme()}} >
        {darkTheme ? <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1673766274/icons/dark-mode-6682_1_tluczz.svg'/> :
        <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1673766162/icons/dark-mode-6682_ncrhz2.svg'/>}
      </button>
      <SVGicons/>
    </section>
  )
}

export default NavBar;