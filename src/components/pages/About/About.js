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


  const body = document.querySelector('body');
  darkTheme ? body.style.backgroundColor = '#1d1d1d' : body.style.backgroundColor = '';

  const [openMobileNavbar, setMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbar(prevState => !openMobileNavbar)
  }


    if (windowWidth < 450) {
      return <Mobile_About/>;
    }

  return (
    <motion.section
    className='about'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <NavBar/>
      <div className={ darkTheme ? 'about_container dark' : 'about_container'}>
        <div className='about_content'>
          <div className='about_text'>
            <h1 className='about_text header'>
              About Me
            </h1>
            <div className='about_text content'>
              <p>
                My professional coding journey began after school when I decided to take on more hands-on experience by enrolling in Hack Reactor's 13 week immersive.
              </p>
              <p>
                Now fully equipped with a skillset beyond the theoretical, I've continued my journey through freelancing work. Enabling me to refine my current skillset, add to it and accrue a professional work history. I'm now ready to take that next leap into becoming part of a team.
              </p>
              <p>
                I currently live in Austin but I'm originally from Rome and have spent time all over the United States, as well as a few years in France and Italy. My hobbies include: working on web applications, programming, playing guitar, singing, writing songs and running.
              </p>
              <p>
              If you would like to get in touch feel free to visit my <a href='https://www.linkedin.com/in/lawrencesanzogni/' >Linkedin</a> profile and/or if you want to see my codebases take a look at my <a href='https://github.com/Lawsan92' >Github</a>
              </p>
            </div>
          </div>
        </div>
        {/* <Suspense fallback={<div>loading...</div>}>
          <Textsphere/>
        </Suspense> */}
      </div>
    </motion.section>
  )
}

export default About;