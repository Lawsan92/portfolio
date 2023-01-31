import React, { useRef, useState, useEffect } from 'react';
import Logo from './Logo.js';
import { Link } from 'react-router-dom';
import { useTheme, useThemeUpdate } from '../ThemeContext.js';
import SVGicons, { MobileSVGicons } from './SVGicons';
import { motion } from 'framer-motion';

export const MobileNavbar = ({ toggleMobileNavbar }) => {

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <section className={darkTheme ? 'navbar mobile dark' : 'navbar mobile'}>
      <div className='navbar_pulldown' onClick={() => {toggleMobileNavbar()}}>
        X
      </div>
      <Logo/>
      <div className='nav-buttons mobile'>
        <Link to='/'>
          <h3 className='nav-buttons mobile entry'>Home</h3>
        </Link>
        <Link to='/skills'>
          <h3 className='nav-buttons mobile entry'>About</h3>
        </Link>
        <Link to='/projects'>
          <h3 className='nav-buttons mobile entry'>Projects</h3>
        </Link>
        <Link to='/experience'>
          <h3 className='nav-buttons mobile entry'>Skills</h3>
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

const NavBar = () => {

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  // const [Yposition, getPosition] = useState(0);

  // useEffect(() => {

  //   let windowHeight = window.innerHeight;
  //   let gridHeight = window.getComputedStyle(document.querySelector(".projects_container")).height;
  //   let realGridHeight = Number(gridHeight.split('').slice(0, -2).join(''));
  //   console.log('gridHeight:', gridHeight);
  //   console.log('realGridHeight:',realGridHeight);


  //   window.addEventListener('resize', () => {
  //     getPosition(Math.floor((realGridHeight - windowHeight )) / 2);
  //   })


  // })

  return (
    <section className={darkTheme ? 'navbar dark' : 'navbar'}>
      <Logo/>
      <div className='nav-buttons'>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/skills'><h3>About</h3></Link>
        <Link to='/projects'><h3>Projects</h3></Link>
        <Link to='/experience'><h3>Skills</h3></Link>
        <Link to='/contact'><h3>Contact</h3></Link>
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