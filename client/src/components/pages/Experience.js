import React from 'react';
import NavBar from './NavBar.js';
import { useTheme } from '../ThemeContext.js';

const Experience = ({ experienceRef }) => {

  const darkTheme = useTheme()

  return (
    <section className={ darkTheme ? 'experience_container dark' : 'experience_container'}>
      <NavBar/>
      {/* <div className='experience_header'>
        <div id='border'/>
        <h2 ref={experienceRef} >Experience</h2>
      </div> */}
      <div className='experience_data'>
        <div className={ darkTheme ? 'experience_entry dark' : 'experience_entry'}>
          <h3>Fullstack Engineer</h3>
          <h3>Freelance</h3>
          <p>2022-</p>
          <p>
            Independently engaging in software development lifecycle practices to ensure timely completion of deliverables for clientele.
            Among my practices are drawing low and high fidelity wireframes, implementation of testing libraries for CI and CD in order to
            avoid backtracking and deployment of products using web services such as AWS and godaddy.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience;