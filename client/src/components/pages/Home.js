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
          <div className='home_text subheader'>
            <p>Hi, my name is</p>
          </div>
          <div className='home_text header'>
            <p>
            Lawrence Sanzogni, <br/>
            Software Engineer</p>
          </div>
          <div className='home_text content'>
            <p>
              I'm a fullstack JavaScript engineer with a specialty in MERN and PERN tech stacks who's avid problem solver and loves creating new content.
              Currently looking to join a team.
            </p>
          </div>
          <button className={ darkTheme ? 'home_text btn dark' : 'home_text btn'}>Contact Me</button>
        </div>
        {/* <Textsphere/> */}
        <div className='home_assets'>
          <div className={ darkTheme ? 'home_assets circ1 dark' : 'home_assets circ1'}></div>
          <div className={ darkTheme ? 'home_assets circ2 dark' : 'home_assets circ2'}></div>
          <div className={ darkTheme ? 'home_assets circ3 dark' : 'home_assets circ3'}></div>
        </div>
      </div>

      {/* <div style={styles}>LS</div> */}

    </section>
  );
}

export default Home;
