import React, { useContext, useState, useEffect } from 'react';
import NavBar, { MobileNavbar } from './NavBar.js';
import Textsphere from './Textsphere.js';
import '../../../dist/scss/styles.scss';
import icons from '../../data/icons.js';
import { useTheme } from '../ThemeContext.js';
import { motion } from 'framer-motion';

const Home = () => {

  const [isClicked, setClick] = useState(false);

  const darkTheme = useTheme();

  const [windowWidth, getWindowWidth] = useState(window.innerWidth);

  // mobile navbar state & methods
  const [openMobileNavbar, setMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbar(prevState => !openMobileNavbar)
  }

  const body = document.querySelector('body');
  darkTheme ? body.style.backgroundColor = '#1d1d1d' : body.style.backgroundColor = '';

  const styles = {
    height: '16vh',
    width: '16vw',
    backgroundColor: '#000000',
    color: 'steelblue',
    fontSize: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const toggleClick = (i) => {
    setClick((prevState) => ({...isClicked, [i]: !prevState[i]}))
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      getWindowWidth(window.innerWidth);
    })
  }, [])

  if (windowWidth < 450) {
    if (!openMobileNavbar) {
      return (
        <motion.section
        className='home_container'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
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
              { !isClicked[1]  ?
                <div className={ darkTheme ? 'home_assets circ1 dark' : 'home_assets circ1'} onClick={() => {toggleClick(1)}}></div>
              :
                <div className='small'>
                  <div className='small circ1' onClick={() => {toggleClick(1)}}>
                    <img className='small img1' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314229/icons/javascript-seeklogo.com_jplqiw.svg'/>
                  </div>
                  <div className='small circ2' onClick={() => {toggleClick(1)}}>
                    <img className='small img2' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314518/icons/icons8-html-5_ydkc4r.svg'/>
                  </div>
                  <div className='small circ3' onClick={() => {toggleClick(1)}}>
                    <img className='small img3' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667312947/icons/icons8-css3-color/icons8-css3-240_nc7v0r.svg'/>
                  </div>
                </div>
              }
              {!isClicked[2] ?
                <div className={ darkTheme ? 'home_assets circ2 dark' : 'home_assets circ2'} onClick={() => {toggleClick(2)}}></div>
                :
                <div className='small2'>
                  <div className='small2 circ1' onClick={() => {toggleClick(2)}}>
                    <img className='small2 img1' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313722/icons/icons8-react-native_muuptm.svg'/>
                  </div>
                  <div className='small2 circ2' onClick={() => {toggleClick(2)}}>
                    <img className='small2 img2' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314438/icons/icons8-webpack_ueency.svg'/>
                  </div>
                  <div className='small2 circ3' onClick={() => {toggleClick(2)}}>
                    <img className='small2 img3' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313787/icons/icons8-node-js_atum9p.svg'/>
                  </div>
                </div>
              }
              {!isClicked[3] ?
                <div className={ darkTheme ? 'home_assets circ3 dark' : 'home_assets circ3'} onClick={() => {toggleClick(3)}}></div>
                :
                <div className='small3'>
                  <div className='small3 circ1' onClick={() => {toggleClick(3)}}>
                    <img className='small3 img1' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314161/icons/icons8-express-js_hljtpv.svg'/>
                  </div>
                  <div className='small3 circ2' onClick={() => {toggleClick(3)}}>
                    <img className='small3 img2' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314067/icons/icons8-mongodb_hsiufh.svg'/>
                  </div>
                  <div className='small3 circ3' onClick={() => {toggleClick(3)}}>
                    <img className='small3 img3' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314370/icons/jest-seeklogo.com_eyoiqb.svg'/>
                  </div>
                </div>
              }
            </div>
          </div>
        </motion.section>
      );
    } else {
      return (
        <motion.section
        className='home_container'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
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
              { !isClicked[1]  ?
                <div className={ darkTheme ? 'home_assets circ1 dark' : 'home_assets circ1'} onClick={() => {toggleClick(1)}}></div>
              :
                <div className='small'>
                  <div className='small circ1' onClick={() => {toggleClick(1)}}>
                    <img className='small img1' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314229/icons/javascript-seeklogo.com_jplqiw.svg'/>
                  </div>
                  <div className='small circ2' onClick={() => {toggleClick(1)}}>
                    <img className='small img2' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314518/icons/icons8-html-5_ydkc4r.svg'/>
                  </div>
                  <div className='small circ3' onClick={() => {toggleClick(1)}}>
                    <img className='small img3' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667312947/icons/icons8-css3-color/icons8-css3-240_nc7v0r.svg'/>
                  </div>
                </div>
              }
              {!isClicked[2] ?
                <div className={ darkTheme ? 'home_assets circ2 dark' : 'home_assets circ2'} onClick={() => {toggleClick(2)}}></div>
                :
                <div className='small2'>
                  <div className='small2 circ1' onClick={() => {toggleClick(2)}}>
                    <img className='small2 img1' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313722/icons/icons8-react-native_muuptm.svg'/>
                  </div>
                  <div className='small2 circ2' onClick={() => {toggleClick(2)}}>
                    <img className='small2 img2' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314438/icons/icons8-webpack_ueency.svg'/>
                  </div>
                  <div className='small2 circ3' onClick={() => {toggleClick(2)}}>
                    <img className='small2 img3' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313787/icons/icons8-node-js_atum9p.svg'/>
                  </div>
                </div>
              }
              {!isClicked[3] ?
                <div className={ darkTheme ? 'home_assets circ3 dark' : 'home_assets circ3'} onClick={() => {toggleClick(3)}}></div>
                :
                <div className='small3'>
                  <div className='small3 circ1' onClick={() => {toggleClick(3)}}>
                    <img className='small3 img1' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314161/icons/icons8-express-js_hljtpv.svg'/>
                  </div>
                  <div className='small3 circ2' onClick={() => {toggleClick(3)}}>
                    <img className='small3 img2' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314067/icons/icons8-mongodb_hsiufh.svg'/>
                  </div>
                  <div className='small3 circ3' onClick={() => {toggleClick(3)}}>
                    <img className='small3 img3' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314370/icons/jest-seeklogo.com_eyoiqb.svg'/>
                  </div>
                </div>
              }
            </div>
          </div>
        </motion.section>
      );
    }
  }

  return (
    <motion.section
    className='home_container'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
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
          { !isClicked[1]  ?
              <div className={ darkTheme ? 'home_assets circ1 dark' : 'home_assets circ1'} onClick={() => {toggleClick(1)}}></div>
            :
              <div className='small'>
                <div className='small circ1' onClick={() => {toggleClick(1)}}>
                  <img className='small img1' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314229/icons/javascript-seeklogo.com_jplqiw.svg'/>
                </div>
                <div className='small circ2' onClick={() => {toggleClick(1)}}>
                  <img className='small img2' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314518/icons/icons8-html-5_ydkc4r.svg'/>
                </div>
                <div className='small circ3' onClick={() => {toggleClick(1)}}>
                  <img className='small img3' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667312947/icons/icons8-css3-color/icons8-css3-240_nc7v0r.svg'/>
                </div>
              </div>
          }
          {!isClicked[2] ?
            <div className={ darkTheme ? 'home_assets circ2 dark' : 'home_assets circ2'} onClick={() => {toggleClick(2)}}></div>
            :
            <div className='small2'>
              <div className='small2 circ1' onClick={() => {toggleClick(2)}}>
                <img className='small2 img1' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313722/icons/icons8-react-native_muuptm.svg'/>
              </div>
              <div className='small2 circ2' onClick={() => {toggleClick(2)}}>
                <img className='small2 img2' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314438/icons/icons8-webpack_ueency.svg'/>
              </div>
              <div className='small2 circ3' onClick={() => {toggleClick(2)}}>
                <img className='small2 img3' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313787/icons/icons8-node-js_atum9p.svg'/>
              </div>
            </div>
          }
          {!isClicked[3] ?
            <div className={ darkTheme ? 'home_assets circ3 dark' : 'home_assets circ3'} onClick={() => {toggleClick(3)}}></div>
            :
            <div className='small3'>
              <div className='small3 circ1' onClick={() => {toggleClick(3)}}>
                <img className='small3 img1' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314161/icons/icons8-express-js_hljtpv.svg'/>
              </div>
              <div className='small3 circ2' onClick={() => {toggleClick(3)}}>
                <img className='small3 img2' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314067/icons/icons8-mongodb_hsiufh.svg'/>
              </div>
              <div className='small3 circ3' onClick={() => {toggleClick(3)}}>
                <img className='small3 img3' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667314370/icons/jest-seeklogo.com_eyoiqb.svg'/>
              </div>
            </div>
          }
        </div>
      </div>

      {/* <div style={styles}>LS</div> */}

    </motion.section>
  );
}

export default Home;
