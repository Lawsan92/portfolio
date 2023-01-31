import React, { useState, useEffect } from 'react';
import icons from '../../data/icons.js'
import NavBar, { MobileNavbar } from './NavBar.js';
import { useTheme } from '../ThemeContext.js'
import Textsphere from './Textsphere.js';
import { motion } from 'framer-motion';

const Skills = ({ skillsRef }) => {

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

    if (windowWidth < 450) {
      if (!openMobileNavbar) {
        return (
          <motion.section
          className={ darkTheme ? 'skills dark' : 'skills'}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
            <div className={ darkTheme ? 'skills_container dark' : 'skills_container'}>
              <div className='navbar_pulldown' onClick={() => {toggleMobileNavbar()}}>
                <div className='navbar_pulldown_bar'/>
                <div className='navbar_pulldown_bar'/>
                <div className='navbar_pulldown_bar'/>
              </div>
              <div className='skills_content'>
                <div className='skills_text'>
                  <h1 className='skills_text header'>
                    About Me
                  </h1>
                  <div className='skills_text content'>
                    <p>
                      My professional coding journey began after school when I decided to take on more hands-on experience by enrolling in Hack Reactor's 13 week immersive.
                    </p>
                    <p>
                      Now fully equipped with a skillset beyond the theoretical, I've continued my journey through freelancing work. Enabling me to refine my current skillset, add to it and accrue a professional work history. I'm now ready to take that next leap into becoming part of a team.
                    </p>
                    <p>
                      I currently live in Austin but I'm originally from Rome and have spent time all over the United States, as well as a few years in France and Italy. My hobbies include: working on web applications, programming, playing guitar, singing, writing songs and running. Open to work.
                    </p>
                    <p>
                    If you would like to get in touch feel free to visit my <a href='https://www.linkedin.com/in/lawrencesanzogni/' >Linkedin</a> profile and/or if you want to see my codebases take a look at my <a href='https://github.com/Lawsan92' >Github</a>
                  </p>
                </div>
              </div>
            </div>
          <Textsphere/>
        </div>
      </motion.section>
        );
      } else {
        return (
          <motion.section
          className='skills'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
             <MobileNavbar toggleMobileNavbar={toggleMobileNavbar} />
            <div className={ darkTheme ? 'skills_container dark' : 'skills_container'}>
              <div className='skills_content'>
                <div className='skills_text'>
                  <h1 className='skills_text header'>
                    About Me
                  </h1>
                  <div className='skills_text content'>
                    <p>
                      My professional coding journey began after school when I decided to take on more hands-on experience by enrolling in Hack Reactor's 13 week immersive.
                    </p>
                    <p>
                      Now fully equipped with a skillset beyond the theoretical, I've continued my journey through freelancing work. Enabling me to refine my current skillset, add to it and accrue a professional work history. I'm now ready to take that next leap into becoming part of a team.
                    </p>
                    <p>
                      I currently live in Austin but I'm originally from Rome and have spent time all over the United States, as well as a few years in France and Italy. My hobbies include: working on web applications, programming, playing guitar, singing, writing songs and running. Open to work.
                    </p>
                    <p>
                    If you would like to get in touch feel free to visit my <a href='https://www.linkedin.com/in/lawrencesanzogni/' >Linkedin</a> profile and/or if you want to see my codebases take a look at my <a href='https://github.com/Lawsan92' >Github</a>
                    </p>
                  </div>
                </div>
              </div>
              <Textsphere/>
          </div>
        </motion.section>
        );
      }
    }

  return (
    <motion.section
    className='skills'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <NavBar/>
      <div className={ darkTheme ? 'skills_container dark' : 'skills_container'}>
        <div className='skills_content'>
          <div className='skills_text'>
            <h1 className='skills_text header'>
              About Me
            </h1>
            <div className='skills_text content'>
              <p>
                My professional coding journey began after school when I decided to take on more hands-on experience by enrolling in Hack Reactor's 13 week immersive.
              </p>
              <p>
                Now fully equipped with a skillset beyond the theoretical, I've continued my journey through freelancing work. Enabling me to refine my current skillset, add to it and accrue a professional work history. I'm now ready to take that next leap into becoming part of a team.
              </p>
              <p>
                I currently live in Austin but I'm originally from Rome and have spent time all over the United States, as well as a few years in France and Italy. My hobbies include: working on web applications, programming, playing guitar, singing, writing songs and running. Open to work.
              </p>
              <p>
              If you would like to get in touch feel free to visit my <a href='https://www.linkedin.com/in/lawrencesanzogni/' >Linkedin</a> profile and/or if you want to see my codebases take a look at my <a href='https://github.com/Lawsan92' >Github</a>
              </p>
            </div>
          </div>
        </div>
        <Textsphere/>
      </div>
    </motion.section>
  )
}

export default Skills;