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
        My journey as an engineer began 4 years ago with independant projects, and gradually evolved into freelance web development, before obtaining a Bachelor's of Science in Computer Science. I also have years of experience in technical support, which affords me a level of scrutiny regarding debugging and system design. I currently live in Austin but I'm originally from Rome and have lived in different parts the United States, as well as a few years in France and Italy. If you would like to get in touch feel free to visit my <a href='https://www.linkedin.com/in/lawrencesanzogni/' >Linkedin</a> profile and/or if you want to see my codebases take a look at my <a href='https://github.com/Lawsan92' >Github</a>
        </p>
      </div>
        {/* <Suspense fallback={<div>loading...</div>}>
          <Textsphere/>
        </Suspense> */}
    </motion.section>
  )
}

export default About;