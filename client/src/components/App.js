import React, { useState, useEffect, useCallback, useRef, createContext, useContext } from 'react';
import Router from './Router.js';
import  ThemeProvider from './ThemeContext.js';

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

  return (
    <div id='app'>
      <ThemeProvider>
        <Router/>
      </ThemeProvider>
    </div>
  )
}

export default App;