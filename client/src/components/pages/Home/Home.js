import React, { useContext, useState, useEffect, lazy, Suspense } from 'react';
import NavBar, { MobileNavbar } from '../NavBar/NavBar.js';
import { Link } from 'react-router-dom';
import '../../../../dist/scss/styles.scss';
import { useTheme } from '../../ThemeContext.js';
import { motion } from 'framer-motion';
const Bubbles = lazy(() => import('./Bubbles.js'));

const Home = () => {

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
    body.style.backgroundColor = '#181818'
  } else if (darkTheme && openMobileNavbar) {
    body.style.backgroundColor = '#1d1d1d'
  } else if (!darkTheme && openMobileNavbar) {
    body.style.backgroundColor = '#ffffff'
  } else {
    body.style.backgroundColor = ''
  }

  const handleResize = () => {
    window.addEventListener('resize', () => {
      getWindowWidth(window.innerWidth);
    });
  };

  useEffect(() => {
    handleResize();
  }, [])

  if (windowWidth < 450) {
    if (!openMobileNavbar) {
      return (
        <motion.section
        className='home_container'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
          <div className='navbar_pulldown' onClick={() => {toggleMobileNavbar()}}>
            <div className='navbar_pulldown_bar'/>
            <div className='navbar_pulldown_bar'/>
            <div className='navbar_pulldown_bar'/>
          </div>
          <div className={ darkTheme ? 'home_content dark' : 'home_content'}>
            <div className={ darkTheme ? 'home_text dark' : 'home_text'} >
              <div className='home_text subheader'>
                <p>Hi, my name is</p>
              </div>
              <div className='home_text header'>
                <p>
                Lawrence Sanzogni, <br/>
                Software Engineer</p>
              </div>
              <div className='home_text content'>
                <p>
                  I'm a fullstack JavaScript engineer with a specialty in MERN and PERN tech stacks who's avid problem solver and loves creating new content.
                  Currently looking to join a team.
                </p>
              </div>
                <Link to='/contact' style={{textDecoration: 'none', cursor: 'pointer'}}>
                <button className={ darkTheme ? 'home_text btn dark' : 'home_text btn'}>Contact Me</button>
                </Link>
              </div>
              <Suspense fallback={<div>loading...</div>}>
                <Bubbles/>
              </Suspense>
          </div>
        </motion.section>
      );
    } else {
      return (
        <motion.section
        className='home_container'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
          <MobileNavbar toggleMobileNavbar={toggleMobileNavbar} />
          <div className={ darkTheme ? 'home_content dark' : 'home_content'}>
            <div className={ darkTheme ? 'home_text dark' : 'home_text'} >
              <div className='home_text subheader'>
                <p>Hi, my name is</p>
              </div>
              <div className='home_text header'>
                <p>
                Lawrence Sanzogni, <br/>
                Software Engineer</p>
              </div>
              <div className='home_text content'>
                <p>
                  I'm a fullstack JavaScript engineer with a specialty in MERN and PERN tech stacks who's avid problem solver and loves creating new content.
                  Currently looking to join a team.
                </p>
              </div>
              <Link to='/contact' style={{textDecoration: 'none', cursor: 'pointer'}}>
                <button className={ darkTheme ? 'home_text btn dark' : 'home_text btn'}>Contact Me</button>
              </Link>
              </div>
              <Suspense fallback={<div>loading...</div>}>
                <Bubbles/>
              </Suspense>
          </div>
        </motion.section>
      );
    }
  }

  return (
    <motion.section
    className='home_container'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <NavBar/>
        <div className={ darkTheme ? 'home_content dark' : 'home_content'}>
          <div className={ darkTheme ? 'home_text dark' : 'home_text'} >
            <div className='home_text subheader'>
              <p>Hi, my name is</p>
            </div>
            <div className='home_text header'>
              <p>
              Lawrence Sanzogni, <br/>
              Software Engineer</p>
            </div>
            <div className='home_text content'>
              <p>
                I'm a fullstack JavaScript engineer with a specialty in MERN and PERN tech stacks who's avid problem solver and loves creating new content.
                Currently looking to join a team.
              </p>
            </div>
            <Link to='/contact' style={{textDecoration: 'none', cursor: 'pointer'}}>
                <button className={ darkTheme ? 'home_text btn dark' : 'home_text btn'}>Contact Me</button>
            </Link>
          </div>
          <Suspense fallback={<div>loading...</div>}>
            <Bubbles/>
          </Suspense>
      </div>
    </motion.section>
  );
}

export default Home;