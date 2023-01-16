import React, { useContext } from 'react';
import NavBar from './NavBar.js';
import '../../../dist/css/styles.css';
import Textsphere from './Textsphere.js';
import ThemeContext from './../App.js';

const Home = ({ homeRef }) => {

  const theme = useContext(ThemeContext);
  console.log('ThemeContext:', ThemeContext);
  console.log('theme:', theme);

  return (
    <section id='home'>
      <NavBar/>
      <div className='home_container'>
        <div className='home_content'>
          <div className='home_text'>
            <span className='home_text border_left' />
            <span className='home_text border_bottom' />
            <p>Hi,<br/>
            I'm Lawrence Sanzogni, <br/>
            Software Engineer</p>
            <span className='home_text border_top' />
            <span className='home_text border_right'/>
          </div>
          <Textsphere/>
        </div>
      </div>
    </section>
  )
}

export default Home;

      {/* <div className="home_header">
        <div id='border'/>
          <h1>{'Home'}</h1>
        </div> */}

{/* <img className='home_content portrait' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667331066/icons/IMG_0041_rxkdai.jpg'/> */}


      {/* <div style={{
        fontSize: '20vh',
        backgroundColor: '#white',
        color: '#9eb0c7',
        padding: '20px',
        // fontFamily: 'Cedarville cursive',
        }}>LS</div> */}