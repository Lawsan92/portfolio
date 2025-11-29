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
      <div className ={ darkTheme ? 'about_container bio dark': 'about_container bio'}>
        <p>
        My journey as an engineer began 4 years ago with independant projects for friends, which gradually evolved into freelance web development. I then moved on to a technical support role for a software security system, which educated me on the importance of clean system design to prevent crahses, and a keen eye in resolving them. During that time I also wore hats as a technical writerm for internal SOPs, and an interview consulatnt, for new support agents. I eventually obtained a Bachelor's of Science in Computer Science form WGU, where I further developed and refined my theoretical knowledge behind computing systems.<br/><br/> I currently live in Austin but I'm originally from Rome and have lived in different parts of the United States, as well as a few years in France and Italy. If you would like to get in touch feel free to visit my <a href='https://www.linkedin.com/in/lawrencesanzogni/' >Linkedin</a> profile and/or if you want to see my codebases take a look at my <a href='https://github.com/Lawsan92' >Github</a>
        </p>
      </div>
        {/* <Suspense fallback={<div>loading...</div>}>
          <Textsphere/>
        </Suspense> */}
    </motion.section>
  )
}

export default About;