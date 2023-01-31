import React, { useState, useEffect, useCallback, useRef, createContext, useContext } from 'react';
import Router from './Router.js';
import ThemeProvider from './ThemeContext.js';

const App = () => {

  return (
    <div id='app'>
      <ThemeProvider>
        <Router/>
      </ThemeProvider>
    </div>
  )
}

export default App;