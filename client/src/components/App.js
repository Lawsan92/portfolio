import React, { useState, useEffect, useCallback, useRef } from 'react';
// const axios = require('axios');

import {
  About,
  Skills,
  Projects,
  Contact,
  NavBar,
  Footer,
  Email
} from './Imports.js';

const App = () => {

  const [light, flipSwitch] = useState(true);

  const [contactRef, projectsRef, skillsRef, homeRef,] = [useRef(), useRef(), useRef(), useRef()];

  const toggle = useCallback(() => {
    flipSwitch(prevState => !prevState);
  }, []);

  // email state
  const [emailModal, isOpen] = useState(false);

  const [emailAuth] = useState({
    serviceID: '',
    emailID: '',
    apiKEY: ''
  })


  const getEmailAuth = () => {

  }

  return (
    <div id='app'>
      {/* <h1>Portfolio</h1>
      <p>{light ? 'is on' : 'turn on the light'}</p>
      <button onClick={() => {toggle()}}>Switch</button> */}
      <button id='float-button' onClick={() => {homeRef.current.scrollIntoView()}}>
        <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667693371/icons/home-icon-silhouette-svgrepo-com_tnbczc.svg' style={{opacity: '0.75'}}/>
      </button>
      {emailModal && <Email isOpen={isOpen}/>}
      <NavBar
        contactRef={contactRef}
        homeRef={homeRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
      />
      <About homeRef={homeRef}/>
      <Skills skillsRef={skillsRef}/>
      <Projects projectsRef={projectsRef}/>
      <Contact contactRef={contactRef} emailModal={emailModal} isOpen={isOpen}/>
      <Footer/>
    </div>
  )
}

export default App;