import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
import Router from './Router.js';
import ThemeProvider from './ThemeContext.js';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('location:', location);
    ReactGA.pageview(location.pathname + location.search);
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
