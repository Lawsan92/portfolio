import React, { useContext, useState, useEffect, lazy, Suspense } from 'react';
import SVGicons, { MobileSVGicons } from '../SVGicons';
import NavBar from '../NavBar/NavBar.js';
import { Link } from 'react-router-dom';
import '/public/scss/styles.scss';
import { useTheme } from '../../ThemeContext.js';
import { motion } from 'framer-motion';

const Laptop = lazy(() => import('./Laptop.js'));


import Mobile_Home from './Mobile_Home.js';

const Home = ({pageRef}) => {

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
    // console.log('darkTheme && !openMobileNavbar <body/>:', body);
    body.style.backgroundColor = '#181818';
    // console.log('darkTheme && !openMobileNavbar .backgroundColor', body.style.backgroundColor);
  } else if (darkTheme && openMobileNavbar) {
    // console.log('darkTheme && openMobileNavbar <body/>:', body);
    body.style.backgroundColor = '#1d1d1d';
    // console.log('darkTheme && openMobileNavbar .backgroundColor:', body.style.backgroundColor);
  } else if (!darkTheme && openMobileNavbar) {
    // console.log('!darkTheme && openMobileNavbar <body/>:', body);
    body.style.backgroundColor = '#ffffff';
    // console.log('!darkTheme && openMobileNavbar .backgroundColor:', body.style.backgroundColor);
  } else {
    // console.log('!darkTheme && !openMobileNavbar <body/>:', body);
    body.style.backgroundColor = '';
    // console.log('!darkTheme && !openMobileNavbar .backgroundColor', body.style.backgroundColor);
  }
  const handleResize = () => {
    window.addEventListener('resize', () => {
      getWindowWidth(window.innerWidth);
    });
  };

  useEffect(() => {
    handleResize();
    pageRef.current['/home'] = true;
  }, [])

  // mobile rendering
  if (windowWidth < 450) {
    return <Mobile_Home pageRef={pageRef}/>;
  }

  return (
    <motion.section
    className={ darkTheme ? 'home_container dark' : 'home_container'}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <NavBar/>
      <div className='home_laptop' style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Suspense fallback={<div>loading gltf asset...</div>}>
          <Laptop/>
          {/* <img src={darkTheme ? 'https://res.cloudinary.com/ducqdbpaw/image/upload/v1764285393/Screenshot_2025-11-27_at_17.16.08-Photoroom_rly1c5.png' : 'https://res.cloudinary.com/ducqdbpaw/image/upload/v1764284445/Screenshot_2025-11-27_at_17.00.06-Photoroom_in4t5p.png'} style={{height: '90vh'}}></img> */}
          {/* {darkTheme ? <img src='https://res.cloudinary.com/ducqdbpaw/image/upload/v1764285393/Screenshot_2025-11-27_at_17.16.08-Photoroom_rly1c5.png' style={{height: '90vh'}}/> :
              <video autoPlay muted playsInline height='775vh' >
            <source src='https://res.cloudinary.com/ducqdbpaw/video/upload/v1764286311/Screen_Recording_2025-11-27_at_17.21.13_jzen6b.mp4' type='video/mp4'/>
          </video>

          } */}
        </Suspense>
      </div>
      <SVGicons/>
    </motion.section>
  );
}

export default Home;

// {/* <Laptop/> */}
