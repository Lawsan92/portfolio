import React, { useState, useEffect, lazy, Suspense } from 'react';
import icons from '../../../data/icons.js'
import MobileNavbar from '../NavBar/Mobile_Navbar.js';
import { useTheme } from '../../ThemeContext.js'
import { motion } from 'framer-motion';
import { MenuIcon } from '../Home/Mobile_Home';

const Mobile_About = ({ skillsRef }) => {

  const darkTheme = useTheme();

  const body = document.querySelector('body');
  darkTheme ? body.style.backgroundColor = '#1d1d1d' : body.style.backgroundColor = '';

  const [windowWidth, getWindowWidth] = useState(window.innerWidth);
  const [openMobileNavbar, setMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbar(prevState => !openMobileNavbar)
  }

    useEffect(() => {
      window.addEventListener('resize', () => {
        getWindowWidth(window.innerWidth);
      })
    }, [])


        return (
          <motion.section
          className={darkTheme ? 'mobile_about dark' : 'mobile_about'}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
             {openMobileNavbar && <MobileNavbar toggleMobileNavbar={toggleMobileNavbar} />}
            <div className={ darkTheme ? 'mobile_about_container dark' : 'mobile_about_container'}>
              <MenuIcon toggleMobileNavbar={toggleMobileNavbar}/>
              <div className='mobile_about_content'>
                <div className='mobile_about_text'>
                  <h1 className='mobile_about_text header'>
                    About Me
                  </h1>
                  <div className={darkTheme ? 'mobile_about_text content dark' : 'mobile_about_text content'}>
                    <p>
                      I’m a language-agnostic full-stack engineer specializing in Python/Django and JavaScript/Node.js/React ecosystems.
                      My journey began 4 years ago with independent projects for friends that gradually evolved into full-stack freelance web development. I later moved into a technical support role for a WiFi-based camera security system, that taught me the importance of clean system design and efficient troubleshooting. During this period I also acted as a technical writer for internal SOPs and as an interview consultant, helping managers evaluate candidates. I eventually obtained a Bachelor of Science in Computer Science from WGU, where I deepened my understanding of algorithms, computing systems, and large-scale application design <br/><br/> I currently live in Austin, TX but I'm originally from Rome and have lived in different areas of the United States, as well as a few years in France. Free to reach out via my <a href='https://www.linkedin.com/in/lawrencesanzogni/' >Linkedin</a> profile. You can also visit my <a href='https://github.com/Lawsan92' >Github</a> to explore my projects.
                    </p>
                  </div>
                </div>
              </div>
          </div>

      <div className={ darkTheme ? 'mobile_about_container_badges dark': 'mobile_about_container_badges'}>
          <img src='https://img.shields.io/badge/Python-steelblue?logo=python&logoColor=white'/>
          <img alt="Static Badge" src="https://img.shields.io/badge/Django-steelblue?logo=django&logoColor=white"/>
          <img src='https://img.shields.io/badge/JavaScript-steelblue?logo=javascript&logoColor=white'/>
          <img alt="Static Badge" src="https://img.shields.io/badge/React-steelblue?logo=react&logoColor=white"/>
          <img alt="Static Badge" src="https://img.shields.io/badge/Node.js-steelblue?logo=nodedotjs&logoColor=white"/>
          <img src='https://img.shields.io/badge/Java-steelblue?logo=coffeescript&logoColor=white'/>
          <img alt="Static Badge" src="https://img.shields.io/badge/HTML-steelblue?logo=htmx&logoColor=white"/>
          <img alt="Static Badge" src="https://img.shields.io/badge/CSS-steelblue?logo=css&logoColor=white"/>
          <img alt="Static Badge" src="https://img.shields.io/badge/Lua-steelblue?logo=lua&logoColor=white"/>
          <img alt="Static Badge" src="https://img.shields.io/badge/PostgreSQL-steelblue?logo=postgresql&logoColor=white"/>
          <img alt="Static Badge" src="https://img.shields.io/badge/Docs-steelblue?logo=googlesheets&logoColor=white"/>
          <img alt="Static Badge" src="https://img.shields.io/badge/Git-steelblue?logo=git&logoColor=white"/>
      </div>
        </motion.section>
        );
}

export default Mobile_About;