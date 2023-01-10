import React from 'react';
import NavBar from './NavBar.js';

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
        fontFamily: 'Brush Script MT, Brush Script Std, cursive',
        fontSize: '20vh',
        backgroundColor: '#white',
        color: '#0047AB', padding: '20px'}}>LS</div> */}
    </section>
  )
}

export default Home;