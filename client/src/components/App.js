import React, { useState, useEffect, useCallback } from 'react';

import {
  About,
  Skills,
  Projects,
  Contact,
  NavBar,
  Footer
} from './Imports.js';

const App = () => {

  const [light, flipSwitch] = useState(true);

  const toggle = useCallback(() => {
    flipSwitch(prevState => !prevState);
  }, []);




  return (
    <div id='app'>
      {/* <h1>Portfolio</h1>
      <p>{light ? 'is on' : 'turn on the light'}</p>
      <button onClick={() => {toggle()}}>Switch</button> */}
      <NavBar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;