import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import useGeoApify from '../hooks/useGeoApify.js';
import Router from './Router.js';
import ThemeProvider from './ThemeContext.js';
const axios = require('axios');

const App = () => {

  const visitedRef = useRef(false);
  let hasVisited = visitedRef.current;

  const [visits, setVisits] = useState({});
  const [analytics, getAnalytics] = useState({region: '', visit: 0});
  const [country, getCountry] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (hasVisited) {
      return
    };

    hasVisited = true;

    /*
    useGeoApify()
      .then((response) => {return response.json();})
      .then((result) => {console.log('userLocationObj:', result); getCountry(result.country.name)})
      .catch((error) => {console.log('error', error)});

    console.log('location.pathname:', location.pathname, 'location.search:', location.search);
    */

  handleVisits();

  }, []);


  // const handleVisits = async () => {
  //   await Promise.all([
  //     axios({method: 'put', url: '/visits', data: {}}),
  //     axios({method: 'get', url: '/visits'})
  //       .then((res) => {console.log('res.data:', res.data); setVisits(res.data.visits)}),
  //     axios({method: 'post', url: '/visitRecords', data: {}}),
  //     axios({method: 'put', url: '/locations', data: {location: country}}),
  //     axios({method: 'get', url: '/locations'})
  //       .then((res) => {console.log('res.data /locations:', res.data.visits.locations); getAnalytics(res.data.visits.locations)}),
  //   ]);
  // };


    console.log('location.pathname:', location.pathname, 'location.search:', location.search);

    const handleVisits = async () => {
      useGeoApify()
        .then((response) => {return response.json();})
        .then((result) => {
          console.log('userLocationObj:', result);
          let data = {
            ip: result.ip,
            country: result.country['iso_code'],
            city: result.city.name,
            lat: result.location.latitude,
            long: result.location.longitude
          }

       Promise.all([
        axios({method: 'put', url: '/visits', data: data}),
        // axios({method: 'get', url: '/visits'})
        //   .then((res) => {console.log('res.data:', res.data); setVisits(res.data.visits)})
        ]);

        })
        .catch((error) => {console.log('error', error)});

    //   await Promise.all([
    //     axios({method: 'put', url: '/visits', data: country}),
    //     // axios({method: 'get', url: '/visits'})
    //     //   .then((res) => {console.log('res.data:', res.data); setVisits(res.data.visits)})
    // ]);
  };

  return (
    <div id='app'>
      <ThemeProvider>
        {/* <Router visits={ visits } analytics={ analytics }/> */}
        <Router/>
      </ThemeProvider>
    </div>
  );
}

export default App;