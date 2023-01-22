import React from 'react';
import icons from '../../data/icons.js'
import NavBar from './NavBar.js';
import { useTheme } from '../ThemeContext.js'
import Textsphere from './Textsphere.js';

const Skills = ({ skillsRef }) => {

  const darkTheme = useTheme()
  console.log('window.innerHeight:', window.innerHeight)
  return (
    <section className='skills' ref={skillsRef}>
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
        {/* <div className='skills_graph'>
          <div className='skills_graph entry'>
            <h3>Front-end</h3>
            <div className='skills_graph entry_meter front-end'/>
          </div>
          <div className='skills_graph entry'>
            <h3>Back-end</h3>
            <div className='skills_graph entry_meter back-end'/>
          </div>
          <div className='skills_graph entry'>
            <div className='skills_graph entry header'>
              <h3>ReactJS</h3>
              <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313722/icons/icons8-react-native_muuptm.svg'/>
            </div>
            <div className='skills_graph entry_meter react'/>
          </div>
          <div className='skills_graph entry'>
            <div className='skills_graph entry header'>
              <h3>NodeJS</h3>
              <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313787/icons/icons8-node-js_atum9p.svg'/>
            </div>
            <div className='skills_graph entry_meter node'/>
          </div>
          <div className='skills_graph entry'>
            <div className='skills_graph entry header'>
              <h3>PostgreSQL</h3>
              <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313754/icons/icons8-postgresql_sjrwkg.svg'/>
            </div>
            <div className='skills_graph entry_meter postgres'/>
          </div>
        </div> */}
        <Textsphere/>
      </div>
    </section>
  )
}

export default Skills;