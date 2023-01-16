import React, { useContext } from 'react';
import NavBar from './NavBar.js';
import '../../../dist/scss/styles.scss';
import Textsphere from './Textsphere.js';
import { useTheme } from '../ThemeContext.js';
const Home = ({ homeRef }) => {

  const darkTheme = useTheme();

  const styles = {
    height: '16vh',
    width: '16vw',
    backgroundColor: '#9eb0c7',
    color: 'white',
    fontSize: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <section className='home_container'>
      <NavBar/>
      <div className={ darkTheme ? 'home_content dark' : 'home_content'}>
        <div className={ darkTheme ? 'home_text dark' : 'home_text'} >
          <div className='home_text header'>
            <p>
            Lawrence Sanzogni, <br/>
            Software Engineer</p>
          </div>
          <div className='home_text content'>
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
        <Textsphere/>
      </div>

      {/* <div style={styles}>LS</div> */}

    </section>
  );
}

export default Home;
