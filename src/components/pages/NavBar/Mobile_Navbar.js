import React, { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useTheme, useThemeUpdate } from '../../ThemeContext.js';
import { MobileSVGicons } from '../SVGicons';
import { motion } from 'framer-motion';
import resume from '../../../../public/assets/Lawrence_Sanzogni.pdf';

const MobileNavbar = ({ toggleMobileNavbar }) => {

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const setDarkTheme = () => {
    return darkTheme ? 'dark' : '';
  };

  const NavbarButtons = () => {
    const buttons = [ { text: 'Home', link: '/' }, { text: 'About', link: '/about' }, { text: 'Projects', link: '/projects' } ];

    return buttons.map((item) => {
      return (
        <Link to={item.link}>
        <p>{item.text}</p>
      </Link>
      )
    })
  }

  return (
    <section className={darkTheme ? 'navbar mobile dark' : 'navbar mobile'}>
      <div className='navbar_pulldown' onClick={() => {toggleMobileNavbar()}}>
        X
      </div>

      <div className={ !darkTheme ? 'nav-buttons mobile' : 'nav-buttons mobile dark'}>
        <NavbarButtons/>
        <a href={resume} download='lawrence_sanzogni_resume'>
          <p className={ !darkTheme ? 'navbar_resume' : 'navbar_resume dark'}>Resume</p>
        </a>
      </div>
      <button className={ darkTheme ? 'navbar_themebutton dark' : 'navbar_themebutton'} onClick={() => {toggleTheme()}} >
        {!darkTheme ? <img src='https://res.cloudinary.com/ducqdbpaw/image/upload/v1764456478/Group_15_h3zpfj.svg' alt='crescent moon icon for dark mode'/> :
        <img src='https://res.cloudinary.com/ducqdbpaw/image/upload/v1764456472/Group_14_vbyb9p.svg' alt='crescent moon icon for dark mode'/>}
      </button>
      <MobileSVGicons/>
    </section>
  )
}

export default MobileNavbar