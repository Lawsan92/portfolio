import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import useGeoApify from '../hooks/useGeoApify.js';
import Router from './Router.js';
import ThemeProvider from './ThemeContext.js';
const axios = require('axios');

const App = () => {

  const visitedRef = useRef(false);
  let hasVisited = visitedRef.current;
  const [visit, getVisit] = useState({})

  useEffect(() => {
    if (hasVisited) {
      return
    };
    hasVisited = true;
    handleVisits();

  }, []);

    const handleVisits = async () => {
      useGeoApify()
        .then((response) => {return response.json();})
        .then((result) => {
          let data = {
            ip: result.ip,
            country: result.country['iso_code'],
            city: result.city.name,
            lat: result.location.latitude,
            long: result.location.longitude,
            date: Date(),
          }

          window.addEventListener("beforeunload", (event) => {
            data.end = Date()
            axios({method: 'put', url: '/visits', data: data})
          })

        })
        .catch((error) => {console.log('error', error)});
  };

  return (
    <div id='app'>
      <ThemeProvider>
        <Router/>
      </ThemeProvider>
    </div>
  );
}

export default App;