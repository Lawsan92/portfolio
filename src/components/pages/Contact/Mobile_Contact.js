import React, { useState, useRef, useEffect } from 'react';
import MobileNavbar from '../NavBar/Mobile_Navbar.js';
import { useTheme } from '../../ThemeContext.js';
import Email from './Email.js';
import { EmailSVG, IphoneSVG } from './../SVGicons.js';
import Map from './Map.js';
import { motion } from 'framer-motion';

const Mobile_Contact = () => {

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


    if (!openMobileNavbar) {
      return (
        <motion.div
        className={ !darkTheme ? 'mobile_contact_container' : 'mobile_contact_container dark' }
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
          <div className='navbar_pulldown' onClick={() => {toggleMobileNavbar()}}>
            <div className='navbar_pulldown_bar'/>
            <div className='navbar_pulldown_bar'/>
            <div className='navbar_pulldown_bar'/>
          </div>
          <div className='mobile_contact_content'>
            <div className= 'mobile_contact_left'>
              <div className='mobile_contact_content header'>
                <h1>Contact Me</h1>
              </div>
              <div className='mobile_contact_directory'>
                <div className={ !darkTheme ? 'mobile_contact_directory_entry' : 'mobile_contact_directory_entry dark'}>
                  <EmailSVG/>
                  <h3 className='mobile_contact_directory_entry text'>lawrencesanzogni@gmail.com</h3>
                </div>
                <div className={ !darkTheme ? 'mobile_contact_directory_entry' : 'mobile_contact_directory_entry dark'}>
                  <IphoneSVG/>
                  <h3 className='mobile_contact_directory_entry text'>561-870-6098</h3>
                </div>
              </div>
              <Email/>
            </div>
            <Map/>
          </div>
        </motion.div>
      )
    } else {
      return (
        <motion.div
        className={ !darkTheme ? 'mobile_contact_container' : 'mobile_contact_container dark' }
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
         <MobileNavbar toggleMobileNavbar={toggleMobileNavbar} />
          <div className='mobile_contact_content'>
            <div className= 'mobile_contact_left'>
              <div className='mobile_contact_content header'>
                <h1>Contact Me</h1>
              </div>
              <div className='mobile_contact_directory'>
                <div className={ !darkTheme ? 'mobile_contact_directory_entry' : 'mobile_contact_directory_entry dark'}>
                  <EmailSVG/>
                  <h3 className='mobile_contact_directory_entry text'>lawrencesanzogni@gmail.com</h3>
                </div>
                <div className={ !darkTheme ? 'mobile_contact_directory_entry' : 'mobile_contact_directory_entry dark'}>
                  <IphoneSVG/>
                  <h3 className='mobile_contact_directory_entry text'>561-870-6098</h3>
                </div>
              </div>
              <Email/>
            </div>
            <Map/>
          </div>
        </motion.div>
      )
    }
}

export default Mobile_Contact;