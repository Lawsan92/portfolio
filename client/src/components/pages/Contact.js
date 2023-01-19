import React, { useState, useRef } from 'react';
import NavBar from './NavBar.js';
import { useTheme } from '../ThemeContext.js';
import Email from './Email.js';
import { EmailSVG, IphoneSVG } from './SVGicons.js';
import Map from './Map.js';

const Contact = () => {

  const darkTheme = useTheme();

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