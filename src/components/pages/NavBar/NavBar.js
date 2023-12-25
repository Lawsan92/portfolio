import React, { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useTheme, useThemeUpdate } from '../../ThemeContext.js';
import SVGicons, { MobileSVGicons } from '../SVGicons';
import { motion } from 'framer-motion';
import resume from '../../../../public/assets/Lawrence_Sanzogni.pdf';
const Logo = lazy(() => import ('./Logo.js'));

const NavBar = () => {

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  // STATE & HANDLERS: modal scroll
  const [docPosition, getPosition] = useState(document.documentElement.scrollTop);
  const [windowWidth, getWidth] = useState(window.innerWidth);

  const handlePosition = () => {
    window.addEventListener('scroll', () => {
      getPosition(document.documentElement.scrollTop);
    })
  };

  const handleWidth = () => {
    window.addEventListener('scroll', () => {
      getWidth(window.innerWidth);
    })
  }

  useEffect(() => {
    handlePosition();
    handleWidth();
  }, [docPosition, windowWidth])

  return (
    <section className={darkTheme ? 'navbar dark' : 'navbar'} style={{top: windowWidth > 1000 ? docPosition : ''}}>
      <Suspense fallback={<div>loading...</div>}>
        <Link to='/'>
          <Logo/>
        </Link>
      </Suspense>
      <div className={ !darkTheme ? 'nav-buttons' : 'nav-buttons dark'}>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/about'><h3>About</h3></Link>
        <Link to='/projects'><h3>Projects</h3></Link>
        <Link to='/experience'><h3>Skills</h3></Link>
        <Link to='/contact'><h3>Contact</h3></Link>
      </div>
      <a href={resume} download='resume'>
        <button className={ !darkTheme ? 'navbar_resume' : 'navbar_resume dark'}>Resume</button>
        </a>
      <button className={ darkTheme ? 'navbar_themebutton dark' : 'navbar_themebutton'} onClick={() => {toggleTheme()}} >
        {darkTheme ? <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1673766274/icons/dark-mode-6682_1_tluczz.svg' alt='crescent moon icon for dark mode'/> :
        <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1673766162/icons/dark-mode-6682_ncrhz2.svg' alt='crescent moon icon for dark mode'/>}
      </button>
      <SVGicons/>
    </section>
  )
}

export default NavBar;