import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useGeoApify from '../hooks/useGeoApify.js';
import Router from './Router.js';
import ThemeProvider from './ThemeContext.js';
const axios = require('axios');

const App = () => {

  const [visits, setVisits] = useState(0);
  const [analytics, getAnalytics] = useState({region: '', visit: 0});

  const handleViews = () => {
    window.addEventListener('load', async () => {
      await Promise.all([
        axios({method: 'put', url: '/visits', data: {}}),
        axios({method: 'get', url: '/visits'})
          .then((res) => {console.log('res.data:', res.data); setVisits(res.data.visits)}),
        axios({method: 'post', url: '/visitRecords', data: {}}),
        axios({method: 'get', url: '/locations'})
          .then((res) => {console.log('res.data /locations:', res.data.visits.locations); getAnalytics(res.data.visits.locations)}),
      ]);
    })
  }

  const location = useLocation();

  useEffect(() => {
    console.log('useGeoApify():', useGeoApify());
    handleViews();
    // useGeoApify()
    //   .then((response) => {return response.json();})
    //   .then((result) => {console.log('userLocationObj:', result); getAnalytics({...analytics, region: result.country.name, visit: analytics.visit + 1})})
    //   .catch((error) => {console.log('error', error)});
    console.log('location.pathname:', location.pathname, 'location.search:', location.search);
  }, [location]);

  return (
    <div id='app'>
      <ThemeProvider>
        <Router visits={ visits } analytics={ analytics }/>
      </ThemeProvider>
    </div>
  );
}

export default App;