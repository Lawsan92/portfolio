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
          </div>
        </motion.section>
        );
}

export default Mobile_About;