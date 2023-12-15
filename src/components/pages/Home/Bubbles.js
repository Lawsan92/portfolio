import React, { useContext, useState, useEffect } from 'react';
import icons from '../../../data/icons.js';
import { useTheme } from '../../ThemeContext.js';

const Bubbles = () => {

  const darkTheme = useTheme();

  const [isClicked, setClick] = useState(false);

  const toggleClick = (i) => {
    setClick((prevState) => ({...isClicked, [i]: !prevState[i]}))
  };
  return (
    <div className='home_assets'>
    { !isClicked[1]  ?
        <div className={ darkTheme ? 'home_assets circ1 dark' : 'home_assets circ1'} onClick={() => {toggleClick(1)}}></div>
      :
        <div className='small' style={{marginTop: '2em'}}>
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
  );
}

export default Bubbles;