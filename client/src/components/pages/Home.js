import React, { useContext, useState, useEffect } from 'react';
import NavBar, { MobileNavbar } from './NavBar.js';
import '../../../dist/scss/styles.scss';
import Textsphere from './Textsphere.js';
import { useTheme } from '../ThemeContext.js';
import icons from '../../data/icons.js';

const Home = () => {

  const [isClicked, setClick] = useState(false);

  const darkTheme = useTheme();

  const [windowWidth, getWindowWidth] = useState(window.innerWidth);

  // mobile navbar state & methods
  const [openMobileNavbar, setMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbar(prevState => !openMobileNavbar)
  }

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

  const toggleClick = () => {
    setClick(prevState => !isClicked)
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      getWindowWidth(window.innerWidth);
    })
  }, [])

  if (windowWidth < 450) {
    if (!openMobileNavbar) {
      return (
        <section className='home_container'>
          <div className='navbar_pulldown' onClick={() => {toggleMobileNavbar()}}>
            <div className='navbar_pulldown_bar'/>
            <div className='navbar_pulldown_bar'/>
            <div className='navbar_pulldown_bar'/>
          </div>
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
            <div className='home_assets'>
          { !isClicked  ?
              <div className={ darkTheme ? 'home_assets circ1 dark' : 'home_assets circ1'} onClick={() => {toggleClick()}}></div>
            :
              <div className='small'>
                <div className='small circ1' onClick={() => {toggleClick()}}>
                  <img className='small img1' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314229/icons/javascript-seeklogo.com_jplqiw.svg'/>
                </div>
                <div className='small circ2' onClick={() => {toggleClick()}}>
                  <img className='small img2' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314518/icons/icons8-html-5_ydkc4r.svg'/>
                </div>
                <div className='small circ3' onClick={() => {toggleClick()}}>
                  <img className='small img3' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667312947/icons/icons8-css3-color/icons8-css3-240_nc7v0r.svg'/>
                </div>
              </div>
          }
              <div className={ darkTheme ? 'home_assets circ2 dark' : 'home_assets circ2'}></div>
              <div className={ darkTheme ? 'home_assets circ3 dark' : 'home_assets circ3'}></div>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className='home_container'>
          <MobileNavbar toggleMobileNavbar={toggleMobileNavbar} />
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
            <div className='home_assets'>
          { !isClicked  ?
              <div className={ darkTheme ? 'home_assets circ1 dark' : 'home_assets circ1'} onClick={() => {toggleClick()}}></div>
            :
              <div className='small'>
                <div className='small circ1' onClick={() => {toggleClick()}}>
                  <img className='small img1' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314229/icons/javascript-seeklogo.com_jplqiw.svg'/>
                </div>
                <div className='small circ2' onClick={() => {toggleClick()}}>
                  <img className='small img2' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314518/icons/icons8-html-5_ydkc4r.svg'/>
                </div>
                <div className='small circ3' onClick={() => {toggleClick()}}>
                  <img className='small img3' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667312947/icons/icons8-css3-color/icons8-css3-240_nc7v0r.svg'/>
                </div>
              </div>
          }
              <div className={ darkTheme ? 'home_assets circ2 dark' : 'home_assets circ2'}></div>
              <div className={ darkTheme ? 'home_assets circ3 dark' : 'home_assets circ3'}></div>
            </div>
          </div>
        </section>
      );
    }
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
        <div className='home_assets'>
      { !isClicked  ?
          <div className={ darkTheme ? 'home_assets circ1 dark' : 'home_assets circ1'} onClick={() => {toggleClick()}}></div>
        :
          <div className='small'>
            <div className='small circ1' onClick={() => {toggleClick()}}>
              <img className='small img1' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314229/icons/javascript-seeklogo.com_jplqiw.svg'/>
            </div>
            <div className='small circ2' onClick={() => {toggleClick()}}>
              <img className='small img2' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314518/icons/icons8-html-5_ydkc4r.svg'/>
            </div>
            <div className='small circ3' onClick={() => {toggleClick()}}>
              <img className='small img3' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667312947/icons/icons8-css3-color/icons8-css3-240_nc7v0r.svg'/>
            </div>
          </div>
      }
          <div className={ darkTheme ? 'home_assets circ2 dark' : 'home_assets circ2'}></div>
          <div className={ darkTheme ? 'home_assets circ3 dark' : 'home_assets circ3'}></div>
        </div>
      </div>

      {/* <div style={styles}>LS</div> */}

    </section>
  );
}

export default Home;
