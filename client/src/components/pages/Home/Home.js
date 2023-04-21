import React, { useContext, useState, useEffect, lazy, Suspense } from 'react';
import NavBar, { MobileNavbar } from '../NavBar/NavBar.js';
import { Link } from 'react-router-dom';
import '../../../../dist/scss/styles.scss';
import { useTheme } from '../../ThemeContext.js';
import { motion } from 'framer-motion';
const axios = require('axios');

const Bubbles = lazy(() => import('./Bubbles.js'));

export const Counter = ({ visits }) => {
  return (<div className='home_views'>{visits}</div>);
}

const Home = () => {

  const darkTheme = useTheme();

  const [windowWidth, getWindowWidth] = useState(window.innerWidth);
  const [visits, setVisits] = useState(0);


  const handleViews = () => {
    window.addEventListener('load', async () => {
      await Promise.all([
        axios({method: 'put', url: '/visits', data: {}}),
        axios({method: 'get', url: '/visits'})
          .then((res) => {console.log('res.data:', res.data); setVisits(res.data.visits)}),
        axios({method: 'post', url: '/visitRecords', data: {}})
      ]);
    })
  }

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
  // console.group()
  //   console.log('darkTheme && !openMobileNavbar')
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
    handleViews();
  }, [])

  // mobile rendering
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
              <div className='home_text header'>
                <p>Lawrence Sanzogni, <br/>Software Engineer</p>
              </div>
              <div className='home_text content'>
                <p>
                  I'm a fullstack Software Engineer with a specialty in MERN and PERN tech stacks. I freelance as a web developer and love creating new content for growing businesses.
                  I'm currently looking for new full time opportunities and to make an impact.
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
              <div className='home_text header'>
                <p>Lawrence Sanzogni,<br/>Software Engineer</p>
              </div>
              <div className='home_text content'>
                <p>
                I'm a fullstack Software Engineer with a specialty in MERN and PERN tech stacks. I freelance as a web developer and love creating new content for growing businesses.
                I'm currently looking for new full time opportunities and to make an impact.
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
            <div className='home_text header'>
              <p>
              Lawrence Sanzogni, <br/>
              Software Engineer</p>
            </div>
            <div className='home_text content'>
              <p>
                I'm a fullstack Software Engineer with a specialty in MERN and PERN tech stacks. I freelance as a web developer and love creating new content for growing businesses.
                I'm currently looking for new full time opportunities and to make an impact.
              </p>
            </div>
            <Link to='/contact' style={{textDecoration: 'none', cursor: 'pointer'}}>
                <button className={ darkTheme ? 'home_text btn dark' : 'home_text btn'}>Contact Me</button>
            </Link>
          </div>
          <Suspense fallback={<div>loading...</div>}>
            <Bubbles/>
          </Suspense>
          <Counter visits={visits}/>
      </div>
    </motion.section>
  );
}

export default Home;
