import React, { useContext, useState, useEffect, lazy, Suspense } from 'react';
import MobileNavbar from '../NavBar/Mobile_Navbar.js';
import { Link } from 'react-router-dom';
import '/public/scss/styles.scss';
import { useTheme } from '../../ThemeContext.js';
import { motion } from 'framer-motion';
const axios = require('axios');
const Laptop_2 = lazy(() => import('./Laptop_2.js'));

  export const MenuIcon = ({toggleMobileNavbar}) => {
      return (
          <div className='navbar_pulldown' onClick={() => {toggleMobileNavbar()}}>
            <div className='navbar_pulldown_bar'/>
            <div className='navbar_pulldown_bar'/>
            <div className='navbar_pulldown_bar'/>
          </div>
      );
  }

export const Counter = ({ visits }) => {
  return (<div className='home_views'>{visits}</div>);
}

const Mobile_Home = () => {

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

  const handleResize = () => {
    window.addEventListener('resize', () => {
      getWindowWidth(window.innerWidth);
    });
  };

  useEffect(() => {
    handleResize();
    handleViews();
  }, [])

      return (
        <motion.section
        className='mobile_home_container'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
          { openMobileNavbar && <MobileNavbar toggleMobileNavbar={toggleMobileNavbar} />}
          <MenuIcon toggleMobileNavbar={toggleMobileNavbar}/>
          <div className={ darkTheme ? 'mobile_home_content dark' : 'mobile_home_content'}>
            <div className={ darkTheme ? 'mobile_home_text dark' : 'mobile_home_text'} >
              <div className='mobile_home_text header'>
                <p>Lawrence Sanzogni <br/>Software Engineer</p>
              </div>
              <div className='mobile_home_text content' style={{background: darkTheme && '#000c'}}>
                <p>
                  I'm a fullstack Software Engineer who specializes in Python/Django and JavaScript/React ecosystems.
                </p>
              </div>
              </div>
              <div className={darkTheme ? 'mobile_home_background dark' : 'mobile_home_background'}>
                <img src={ darkTheme ? 'https://res.cloudinary.com/ducqdbpaw/image/upload/v1703393775/portfolio/Screenshot_2023-12-23_at_22.55-PhotoRoom_fjxp7w.png' :'https://res.cloudinary.com/ducqdbpaw/image/upload/v1703393575/portfolio/Screenshot_2023-12-23_at_18.26-PhotoRoom_w6bkvp.png'} className='mobile_home_background_img'/>
              </div>
          </div>
        </motion.section>
      );
}

export default Mobile_Home;
