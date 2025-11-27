import React, { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useTheme, useThemeUpdate } from '../../ThemeContext.js';
import { MobileSVGicons } from '../SVGicons';
import { motion } from 'framer-motion';
import resume from '../../../../public/assets/Lawrence_Sanzogni.pdf';
const Logo = lazy(() => import ('./Logo.js'));

const MobileNavbar = ({ toggleMobileNavbar }) => {

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const setDarkTheme = () => {
    return darkTheme ? 'dark' : '';
  };

  const mapNavbarButtons = () => {
    const buttons = [ { text: 'Home', link: '/' }, { text: 'About', link: '/about' }, { text: 'Projects', link: '/projects' } ];

    return buttons.map((item) => {
      return (
        <Link to={item.link}>
        <h3 className={`nav-buttons mobile entry ${setDarkTheme()}`}>{item.text}</h3>
      </Link>
      )
    })
  }

  return (
    <section className={darkTheme ? 'navbar mobile dark' : 'navbar mobile'}>
      <div className='navbar_pulldown' onClick={() => {toggleMobileNavbar()}}>
        X
      </div>
      <Suspense fallback={<div>loading...</div>}>
        <Link to='/'>
          <Logo/>
        </Link>
      </Suspense>
      <div className={ !darkTheme ? 'nav-buttons mobile' : 'nav-buttons mobile dark'}>
        {mapNavbarButtons()}
      </div>
      <a href={resume} download='resume'>
        <button className={ !darkTheme ? 'navbar_resume' : 'navbar_resume dark'}>Resume</button>
        </a>
      <button className={ darkTheme ? 'navbar_themebutton dark' : 'navbar_themebutton'} onClick={() => {toggleTheme()}} >
        {darkTheme ? <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1673766274/icons/dark-mode-6682_1_tluczz.svg' alt='crescent moon icon for dark mode'/> :
        <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1673766162/icons/dark-mode-6682_ncrhz2.svg' alt='crescent moon icon for dark mode'/>}
      </button>
      <MobileSVGicons/>
    </section>
  )
}

export default MobileNavbar