import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import useGeoApify from '../hooks/useGeoApify.js';
import Router from './Router.js';
import ThemeProvider from './ThemeContext.js';
const axios = require('axios');

const App = () => {

  const visitedRef = useRef(false);
  let hasVisited = visitedRef.current;
  let pageRef = useRef({})


  useEffect(() => {
    if (hasVisited) {
      return
    };
    hasVisited = true;
    handleVisits();
    return () => {
      console.log('UNMOUNT')
    }
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

          let mountDate = new Date();

          window.addEventListener("beforeunload", (event) => {
            data['session_time'] = Math.floor((new Date().getTime() - mountDate.getTime()) / 1000);
            try {
             data.pages = pageRef.current
            } catch (error) {
              console.console.error();

            }
            axios({method: 'put', url: '/visits', data: data})
          })

        })
        .catch((error) => {console.log('error', error)});
  };

  return (
    <div id='app'>
      <ThemeProvider>
        <Router pageRef={pageRef}/>
      </ThemeProvider>
    </div>
  );
}

export default App;