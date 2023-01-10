import React from 'react';
import Textsphere from './Textsphere.js';

const About = ({ homeRef }) => {
  return (
    <section id='about'>
      <h1></h1>
      <div id ='about_text'>
         <div className='about_text'>
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
      {/* <img id='about_portrait' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667331066/icons/IMG_0041_rxkdai.jpg'/> */}
      <Textsphere/>
    </section>
  )
}

export default About;