import React, { useState, useRef, useEffect } from 'react';
import NavBar, { MobileNavbar } from '../NavBar/NavBar.js';
import { useTheme } from '../../ThemeContext.js';
import Email from './Email.js';
import { EmailSVG, IphoneSVG } from './../SVGicons.js';
import Map from './Map.js';
import { motion } from 'framer-motion';
import Mobile_Contact from './Mobile_Contact.js';

const Contact = () => {

  const darkTheme = useTheme();

  const body = document.querySelector('body');
  darkTheme ? body.style.backgroundColor = '#1d1d1d' : body.style.backgroundColor = '';

  const [windowWidth, getWindowWidth] = useState(window.innerWidth);

  // mobile navbar state & methods
  const [openMobileNavbar, setMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbar(prevState => !openMobileNavbar)
  }

  const handleResize = () => {
    window.addEventListener('resize', () => {
      getWindowWidth(window.innerWidth);
    });
  };

  useEffect(() => {
    handleResize();
  }, [])


  if (windowWidth < 450) {
    return <Mobile_Contact/>
  }


  return (
    <motion.div
    className={ !darkTheme ? 'contact_container' : 'contact_container dark' }
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <NavBar/>
      <div className='contact_content'>
        <div className= 'contact_left'>
          <div className='contact_content header'>
            <h1>Contact Me</h1>
          </div>
          <div className='contact_directory'>
            <div className={ !darkTheme ? 'contact_directory_entry' : 'contact_directory_entry dark'}>
              <EmailSVG/>
              <h3 className='contact_directory_entry text'>lawrencesanzogni@gmail.com</h3>
            </div>
            <div className={ !darkTheme ? 'contact_directory_entry' : 'contact_directory_entry dark'}>
              <IphoneSVG/>
              <h3 className='contact_directory_entry text'>561-870-6098</h3>
            </div>
          </div>
          <Email/>
        </div>
        <Map/>
      </div>
    </motion.div>
  )
}

export default Contact;