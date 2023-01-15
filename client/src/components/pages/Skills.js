import React from 'react';
import icons from '../../data/icons.js'
import NavBar from './NavBar.js';
import { useTheme } from '../ThemeContext.js'

const Skills = ({ skillsRef }) => {

  const darkTheme = useTheme()
  console.log('window.innerHeight:', window.innerHeight)

  return (
    <section id='skills' ref={skillsRef}>
      <NavBar/>
      <div className={ darkTheme ? 'skills_container dark' : 'skills_container'}>
        <div className='skills_content'>
          <div className='about_text'>
            <h1 className='about_text header'>
              About Me
            </h1>
            <p>
              I'm a fullstack JavaScript engineer with a specialty in MERN and PERN tech stacks. I'm an avid problem solver and love creating new content.
            </p>
            <p>
              My professional coding journey began after school when I decided to take on more hands-on experience by enrolling in Hack Reactor's 13 week immersive.
            </p>
            <p>
              Now fully equipped with a skillset beyond the theoretical, I've continued my journey through freelancing work. Enabling me to refine my current skillset, add to it and accrue a professional work history. I'm now ready to take that next leap into becoming part of a team.
            </p>
            <p>
              I currently live in Austin but I'm originally from Rome and have spent time all over the United States, as well as a few years in France and Italy. My hobbies include: working on web applications, programming, playing guitar, singing, writing songsand running. Open to work.
            </p>
          </div>
        </div>
        <div className='skills_graph'>
          <div className='skills_graph entry'>
            <h3>Front-end</h3>
            <div className='skills_graph entry_meter front-end'/>
            <h3>Back-end</h3>
            <div className='skills_graph entry_meter back-end'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;