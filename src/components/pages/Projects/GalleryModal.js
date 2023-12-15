import React, { useState, useEffect, useRef } from 'react';
import projects from '../../../data/projects.js';
import { LeftArrowSVG, RightArrowSVG } from './../SVGicons.js';

const GalleryModal = ({ isOpen, toggleModal, projectIndex }) => {

  // STATE & HANDLERS: modal scroll
  const [docPosition, getPosition] = useState(document.documentElement.scrollTop);

  const handlePosition = () => {
    window.addEventListener('scroll', () => {
      getPosition(document.documentElement.scrollTop);
    })
  };

  useEffect(() => {
    handlePosition();
    handleArrowKeys();
  }, [])

  const countRef = useRef(0);

  // STATE & HANDLERS: image slider
  const [count, setCount] = useState(0);

  const handleCount = (className) => {
    console.log('className:', className);
    if (className === 'right-arrow') {
      if (projects[projectIndex].gallery.length - 1 === count) {
        setCount(0);
      } else {
        setCount( count + 1);
      }
    } else if (className === 'left-arrow') {
      if (count === 0) {
        setCount(projects[projectIndex].gallery.length - 1);
      } else {
        setCount( count - 1);
      }
    }
  };

  // image scroll: arrow keys
  const handleArrowKeys = (e) => {
    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      console.log('e.repeat:', e.repeat, 'e.keyCode:', e.keyCode)
      if (e.repeat) {return};
      if (e.keyCode === 37) {
        console.log('e.keyCode2:', e.keyCode);
        handleCount('left-arrow');
      } else if (e.keyCode === 39) {
        console.log('e.keyCode2:', e.keyCode);
        handleCount('right-arrow');
      }
    });
  }

  // handleArrowKeys();

  // STATE & HANDLERS: modal
  const handleClick = (e) => {
    e.currentTarget === e.target && toggleModal();
  };

  const closeModal = (e) => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggleModal();
      }
    })
  };

  closeModal();

  const mapProjectGallery = () => {

    const mobileStyles = {
      img: {
        height: '70vh',
        width: 'fit-content',
      },
      card: {
        height: '70vh',
        width: 'fit-content',
      }
    };

    const gallery = projects[projectIndex].gallery;
      if (gallery.length) {
        let isMobile = gallery[count].mobile;
        console.log('gallery[count].url:', gallery[count].url, 'gallery[count].meta:', gallery[count].meta);
        return (
          <div className='projects_gallery-modal_card' style={isMobile && { ...mobileStyles.card}}>
            <img
            src={gallery[count].url}
            alt={gallery[count].meta}
            className='projects_gallery-modal_card img'
            style={isMobile && { ...mobileStyles.img}}
            onClick={() => {handleCount('right-arrow')}}/>
          </div>
        );
      } else {
        return <p>COMING SOON...</p>;
      }
  };

  return (
    <div className='projects_gallery-modal' style={{top: docPosition}}>
      <div className='projects_gallery-modal_background' onClick={(e) => {handleClick(e)}}>
        <LeftArrowSVG handleCount={handleCount} count={count}/>
        {mapProjectGallery()}
        <RightArrowSVG handleCount={handleCount} count={count}/>
      </div>
    </div>
  );
}

export default GalleryModal;


