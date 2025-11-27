import React, { useContext, useState, useEffect, lazy, Suspense } from 'react';
import SVGicons, { MobileSVGicons } from '../SVGicons';
import NavBar from '../NavBar/NavBar.js';
import { Link } from 'react-router-dom';
import '/Users/lawrence/portfolio/public/scss/styles.scss';
import { useTheme } from '../../ThemeContext.js';
import { motion } from 'framer-motion';

const Bubbles = lazy(() => import('./Bubbles.js'));
const Laptop = lazy(() => import('./Laptop.js'));
const Laptop_2 = lazy(() => import('./Laptop_2.js'));

import Mobile_Home from './Mobile_Home.js';

export const Counter = ({ visits }) => {
  return (<div className='home_views'>{visits}</div>);
}

const Home = ({ visits }) => {

  const darkTheme = useTheme();

  const [windowWidth, getWindowWidth] = useState(window.innerWidth);

  // mobile navbar state & methods
  const [openMobileNavbar, setMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbar(prevState => !openMobileNavbar)
  }

  const body = document.querySelector('body');

  // styling for empty html space on mobile screens
  if (darkTheme && !openMobileNavbar) {
    console.log('darkTheme && !openMobileNavbar <body/>:', body);
    body.style.backgroundColor = '#181818';
    console.log('darkTheme && !openMobileNavbar .backgroundColor', body.style.backgroundColor);
  } else if (darkTheme && openMobileNavbar) {
    console.log('darkTheme && openMobileNavbar <body/>:', body);
    body.style.backgroundColor = '#1d1d1d';
    console.log('darkTheme && openMobileNavbar .backgroundColor:', body.style.backgroundColor);
  } else if (!darkTheme && openMobileNavbar) {
    console.log('!darkTheme && openMobileNavbar <body/>:', body);
    body.style.backgroundColor = '#ffffff';
    console.log('!darkTheme && openMobileNavbar .backgroundColor:', body.style.backgroundColor);
  } else {
    console.log('!darkTheme && !openMobileNavbar <body/>:', body);
    body.style.backgroundColor = '';
    console.log('!darkTheme && !openMobileNavbar .backgroundColor', body.style.backgroundColor);
  }
  // console.group()
  //   console.log('darkTheme && !openMobileNavbar');
  //   console.log(darkTheme && !openMobileNavbar)
  //   console.log('darkTheme && openMobileNavbar')
  //   console.log(darkTheme && openMobileNavbar)
  //   console.log('!darkTheme && !openMobileNavbar')
  //   console.log(!darkTheme && !openMobileNavbar)
  // console.groupEnd();

  const handleResize = () => {
    window.addEventListener('resize', () => {
      getWindowWidth(window.innerWidth);
    });
  };

  useEffect(() => {
    handleResize();
  }, [])

  // mobile rendering
  if (windowWidth < 450) {
    return <Mobile_Home/>;
  }

  return (
    <motion.section
    className='home_container'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
        <div className={ darkTheme ? 'home_content dark' : 'home_content'}>
           <NavBar/>
           {/* <div className='terminal'>
              <input type="text" className='terminal_text'></input>
           </div> */}
          <div className='home_laptop'>
          <Suspense fallback={<div>loading...</div>}>
            <Laptop_2/>
          </Suspense>
          </div>
        <SVGicons/>
      </div>
    </motion.section>
  );
}

export default Home;

// {/* <Laptop/> */}