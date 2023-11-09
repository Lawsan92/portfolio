import React, { useState, useEffect } from 'react';
import NavBar, { MobileNavbar } from '../NavBar/NavBar.js';
import { useTheme } from '../../ThemeContext.js';
import { FrontEndSVG, BackEndSVG } from '../SVGicons.js';
import { motion } from 'framer-motion';
import WorkExperience from './workExperience/workExperience.js';
import SkillEntry from './SkillEntry/SkillEntry.js';


const Experience = ({ experienceRef }) => {

  const darkTheme = useTheme()

  const body = document.querySelector('body');
  darkTheme ? body.style.backgroundColor = '#1d1d1d' : body.style.backgroundColor = '';

  const [windowWidth, getWindowWidth] = useState(window.innerWidth);
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
  }, [])

/*------ MOBILE ------*/
    if (windowWidth < 450) {
      if (!openMobileNavbar) {
        return (
          <motion.div className='experience'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
            <div className='navbar_pulldown' onClick={() => {toggleMobileNavbar()}}>
              <div className='navbar_pulldown_bar'/>
              <div className='navbar_pulldown_bar'/>
              <div className='navbar_pulldown_bar'/>
            </div>
            <section className={ darkTheme ? 'experience_container dark' : 'experience_container'}>
              <div className='experience_header'>Skills & Experience</div>
              <div className='experience_body'>
                <WorkExperience/>
                <div className='skills_graph'>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>Front-end</h3>
                  <FrontEndSVG/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter front-end' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>Back-end</h3>
                  <BackEndSVG/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter back-end' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <SkillEntry openMobileNavbar={openMobileNavbar}/>
            </div>
                </div>
            </section>
          </motion.div>
        );
      } else {
        return (
          <motion.div className='experience'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
            <MobileNavbar toggleMobileNavbar={toggleMobileNavbar} />
            <section className={ darkTheme ? 'experience_container dark' : 'experience_container'}>
              <div className='experience_header'>Skills & Experience</div>
              <div className='experience_body'>
              <WorkExperience/>
                <div className='skills_graph'>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>Front-end</h3>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter front-end' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>Back-end</h3>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter back-end' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <SkillEntry openMobileNavbar={openMobileNavbar}/>
            </div>
                </div>
            </section>
          </motion.div>
        );
      }
    }

  /*------ DESKTOP ------*/
  return (
    <motion.div className='experience'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <NavBar/>
      <section className={ darkTheme ? 'experience_container dark' : 'experience_container'}>
        <div className='experience_header'>Skills & Experience</div>
        <div className='experience_body'>
          <WorkExperience/>
            <div className='skills_graph'>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>Front-end</h3>
                  <FrontEndSVG/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter front-end' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>Back-end</h3>
                  <BackEndSVG/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter back-end' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <SkillEntry openMobileNavbar={openMobileNavbar}/>
            </div>
          </div>
      </section>
    </motion.div>
  );
}

export default Experience;