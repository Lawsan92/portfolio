import React, { useState, useEffect, lazy, Suspense } from 'react';
import icons from '../../../data/icons.js'
import NavBar, { MobileNavbar } from '../NavBar/NavBar.js';
import { useTheme } from '../../ThemeContext.js'
import { motion } from 'framer-motion';
const Textsphere = lazy(() => import('./Textsphere.js'));
import Mobile_About from './Mobile_About.js';
import useResize from '../../../hooks/useResize.js';

const About = ({ skillsRef }) => {

  const darkTheme = useTheme();
  const { windowWidth } = useResize();

  const [openMobileNavbar, setMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbar(prevState => !openMobileNavbar)
  }


    if (windowWidth < 450) {
      return <Mobile_About/>;
    }

  return (
    <motion.section
    className={ darkTheme ? 'about_container dark' : 'about_container'}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <NavBar/>
      <h2>
        About Me
      </h2>
      <div className='about_content'>
        <div className ={ darkTheme ? 'about_container_bio dark': 'about_container_bio'}>
          <p>
            I’m a language-agnostic full-stack engineer who specializes in Python/Django and JavaScript/Node.js/React workflows and ecosystems. I currently reside in Austin, TX, but I'm originally from Rome, Italy and grew up in different areas of the United States, as well as a few years in France; I also speak fluent Italian and conversational French.<br/><br/>
            My journey began 4 years ago with small-scale independent freelance projecvts, eventually transitioning into full-stack web development. I later moved on to a Bilingual (in Italian) technical support role for a WiFi-based camera security system, which taught me the importance of clean system design and efficient troubleshooting. During this period I also acted as a technical writer for internal SOPs and as an interview consultant, helping hiring managers evaluate candidate fluency in Italian.<br/><br/>
            I eventually obtained a Bachelor of Science in Computer Science from WGU, where I deepened my understanding of algorithms, data structures, computing performance, operating systems, threading, and large-scale application design. While at WGU, I also had the opportunity of expanding my horizons into other tech subjects and fields such as Java programming, C programming, discrete Mathematics, database administation, IT business practices, Software Quality Assurance, SDLC paradigms and models, Linux Foundations, Machine Learning, etc. <br/><br/>
            Free to reach out via my <a href='https://www.linkedin.com/in/lawrencesanzogni/' >Linkedin</a> profile. You can also visit my <a href='https://github.com/Lawsan92' >Github</a> to explore my projects.
          </p>
        </div>
        <div className='about_container_badges'>
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
      </div>
    </motion.section>
  )
}

export default About;