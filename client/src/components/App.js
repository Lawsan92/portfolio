import React, { useState, useEffect, useCallback, useRef } from 'react';

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

  const contactRef = useRef()

  const toggle = useCallback(() => {
    flipSwitch(prevState => !prevState);
  }, []);




  return (
    <div id='app'>
      {/* <h1>Portfolio</h1>
      <p>{light ? 'is on' : 'turn on the light'}</p>
      <button onClick={() => {toggle()}}>Switch</button> */}
      <NavBar contactRef={contactRef} />
      <About/>
      <Skills/>
      <Projects/>
      <Contact contactRef={contactRef} />
      <Footer/>
    </div>
  )
}

export default App;