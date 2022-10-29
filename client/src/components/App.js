import React, { useState, useEffect, useCallback } from 'react';

const App = () => {

  const [light, flipSwitch] = useState(true);

  const toggle = useCallback(() => {
    flipSwitch(prevState => !prevState);
  }, []);




  return (
    <div id='app'>
      <h1>Portfolio</h1>
      <p>{light ? 'is on' : 'turn on the light'}</p>
      <button onClick={() => {toggle()}}>Switch</button>
    </div>
  )
}

export default App;