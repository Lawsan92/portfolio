import React, { useState, useRef, useEffect } from 'react';
import NavBar, { MobileNavbar } from './NavBar.js';
import { useTheme } from '../ThemeContext.js';
import Email from './Email.js';
import { EmailSVG, IphoneSVG } from './SVGicons.js';
import Map from './Map.js';

const Contact = () => {

  const darkTheme = useTheme();

  const [windowWidth, getWindowWidth] = useState(window.innerWidth);

  // mobile navbar state & methods
  const [openMobileNavbar, setMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbar(prevState => !openMobileNavbar)
  }


  useEffect(() => {
    window.addEventListener('resize', () => {
      getWindowWidth(window.innerWidth);
    })
  }, [])


  if (windowWidth < 450) {
    if (!openMobileNavbar) {
      return (
        <div className={ !darkTheme ? 'contact_container' : 'contact_container dark' }>
          <div className='navbar_pulldown' onClick={() => {toggleMobileNavbar()}}>
            <div className='navbar_pulldown_bar'/>
            <div className='navbar_pulldown_bar'/>
            <div className='navbar_pulldown_bar'/>
          </div>
          <div className='contact_content'>
            <div className= 'contact_left'>
              <div className='contact_content header'>
                <h1>Contact Me</h1>
              </div>
              <div className='contact_directory'>
                <div className={ !darkTheme ? 'contact_directory entry' : 'contact_directory entry dark'}>
                  <EmailSVG/>
                  <h3 className='contact_directory entry text'>lawrencesanzogni@gmail.com</h3>
                </div>
                <div className={ !darkTheme ? 'contact_directory entry' : 'contact_directory entry dark'}>
                  <IphoneSVG/>
                  <h3 className='contact_directory entry text'>561-870-6098</h3>
                </div>
              </div>
              <Email/>
            </div>
            <Map/>
          </div>
        </div>
      )
    } else {
      return (
        <div className={ !darkTheme ? 'contact_container' : 'contact_container dark' }>
         <MobileNavbar toggleMobileNavbar={toggleMobileNavbar} />
          <div className='contact_content'>
            <div className= 'contact_left'>
              <div className='contact_content header'>
                <h1>Contact Me</h1>
              </div>
              <div className='contact_directory'>
                <div className={ !darkTheme ? 'contact_directory entry' : 'contact_directory entry dark'}>
                  <EmailSVG/>
                  <h3 className='contact_directory entry text'>lawrencesanzogni@gmail.com</h3>
                </div>
                <div className={ !darkTheme ? 'contact_directory entry' : 'contact_directory entry dark'}>
                  <IphoneSVG/>
                  <h3 className='contact_directory entry text'>561-870-6098</h3>
                </div>
              </div>
              <Email/>
            </div>
            <Map/>
          </div>
        </div>
      )
    }
  }


  return (
    <div className={ !darkTheme ? 'contact_container' : 'contact_container dark' }>
      <NavBar/>
      <div className='contact_content'>
        <div className= 'contact_left'>
          <div className='contact_content header'>
            <h1>Contact Me</h1>
          </div>
          <div className='contact_directory'>
            <div className={ !darkTheme ? 'contact_directory entry' : 'contact_directory entry dark'}>
              <EmailSVG/>
              <h3 className='contact_directory entry text'>lawrencesanzogni@gmail.com</h3>
            </div>
            <div className={ !darkTheme ? 'contact_directory entry' : 'contact_directory entry dark'}>
              <IphoneSVG/>
              <h3 className='contact_directory entry text'>561-870-6098</h3>
            </div>
          </div>
          <Email/>
        </div>
        <Map/>
      </div>
    </div>
  )
}

export default Contact;