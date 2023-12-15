import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import Router from './Router.js';
import ThemeProvider from './ThemeContext.js';

const App = () => {

const location = useLocation();

useEffect(() => {
  ReactGA.initialize('G-M7ZPE1F0GV');
  ReactGA.pageview(location.pathname + location.search)
  console.log('location.pathname:', location.pathname, 'location.search:', location.search);
}, [location]);

  return (
    <div id='app'>
      <ThemeProvider>
        <Router/>
      </ThemeProvider>
    </div>
  );
}

export default App;