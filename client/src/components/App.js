import React, { useState, useEffect, useCallback, useRef } from 'react';
// const axios = require('axios');
import Router from './Router.js';

const App = () => {

  // div refs for scrolling
  const [contactRef, projectsRef, skillsRef, homeRef, experienceRef] = [useRef(), useRef(), useRef(), useRef(), useRef()];

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
      {/* <button id='float-button' onClick={() => {homeRef.current.scrollIntoView({behavior: 'smooth'})}}>
      </button>
      {emailModal && <Email isOpen={isOpen}/>}
      <NavBar
        contactRef={contactRef}
        homeRef={homeRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
      />
      <About homeRef={homeRef}/>
      <Skills skillsRef={skillsRef}/>
      <Projects projectsRef={projectsRef}/>
      <Experience experienceRef={experienceRef} />
      <Contact contactRef={contactRef} emailModal={emailModal} isOpen={isOpen}/>
      <Footer/> */}
      <Router/>
    </div>
  )
}

export default App;