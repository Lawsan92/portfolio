import React from 'react';
import NavBar from './NavBar.js';
import '../../../dist/styles.css';

const Home = ({ homeRef }) => {
  return (
    <section id='home'>
      <NavBar/>
      <div className='home_container'>
        <div className="home_header">
        <div id='border'/>
          <h1>{'Home'}</h1>
        </div>
        <div className='home_content'>
          <img className='home_content portrait' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667331066/icons/IMG_0041_rxkdai.jpg'/>
          <div className='home_text'>
            <p>Hi,<br/>
            I'm Lawrence Sanzogni <br/>
            Software Engineer</p>
          </div>

        </div>
      </div>
      {/* <div style={{
        fontSize: '20vh',
        backgroundColor: '#white',
        color: '#0047AB',
        padding: '20px',
        fontFamily: 'Cedarville cursive',
        }}>LS</div> */}
    </section>
  )
}

export default Home;


          {/* <div className='about_text'>
            <p>
              Hi, I'm Lawrence. I'm a fullstack JavaScript engineer with a specialty in MERN and PERN tech stacks. I'm an avid problem solver and love creating new content.
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
          </div> */}