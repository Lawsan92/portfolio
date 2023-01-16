import React, { useState, useEffect, useCallback, useRef, createContext, useContext } from 'react';
import Router from './Router.js';

const styles = {
  backgroundColor: 'white'
}

export const ThemeContext = createContext(styles);

const App = () => {

  console.log('ThemeContext:', useContext(ThemeContext));

  const [theme, setTheme] = useState(false);

  return (
    <div id='app'>
      <ThemeContext.Provider value={theme}>
        <Router/>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;