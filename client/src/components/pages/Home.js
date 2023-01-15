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
        <Textsphere/>
        <div className={ darkTheme ? 'home_text dark' : 'home_text'} >
          <p>Hi,<br/>
          I'm Lawrence Sanzogni, <br/>
          Software Engineer</p>
        </div>
      </div>

      {/* <div style={styles}>LS</div> */}

    </section>
  );
}

export default Home;
