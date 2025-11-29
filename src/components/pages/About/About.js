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
          I’m a language-agnostic full-stack engineer specializing in Python/Django and JavaScript/Node.js/React ecosystems.
          My journey began 4 years ago with independent projects for friends that gradually evolved into full-stack freelance web development. I later moved into a technical support role for a WiFi-based camera security system, that taught me the importance of clean system design and efficient troubleshooting. During this period I also acted as a technical writer for internal SOPs and as an interview consultant, helping managers evaluate candidates. I eventually obtained a Bachelor of Science in Computer Science from WGU, where I deepened my understanding of algorithms, computing systems, and large-scale application design <br/><br/> I currently live in Austin, TX but I'm originally from Rome and have lived in different areas of the United States, as well as a few years in France. Free to reach out via my <a href='https://www.linkedin.com/in/lawrencesanzogni/' >Linkedin</a> profile. You can also visit my <a href='https://github.com/Lawsan92' >Github</a> to explore my projects.
        </p>
      </div>
        {/* <Suspense fallback={<div>loading...</div>}>
          <Textsphere/>
        </Suspense> */}
    </motion.section>
  )
}

export default About;