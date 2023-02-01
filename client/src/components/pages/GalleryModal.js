import React, { useState } from 'react';
import projects from '../../data/projects.js';
import { LeftArrowSVG, RightArrowSVG } from './SVGicons.js';

const GalleryModal = ({ isOpen, toggleModal, projectIndex }) => {

  const [count, setCount] = useState(0);

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
    const gallery = projects[projectIndex].gallery;
      if (gallery.length) {
        return <img src={gallery[count]} className='projects_gallery-modal_card img'/>;
      } else {
        return <p>COMING SOON...</p>;
      }
  }

  return (
    <div className='projects_gallery-modal' >
      <div className='projects_gallery-modal_background' onClick={(e) => {handleClick(e)}}>
        <LeftArrowSVG setCount={setCount} count={count}/>
        <div className='projects_gallery-modal_card'>
          {mapProjectGallery()}
        </div>
        <RightArrowSVG setCount={setCount} count={count}/>
      </div>
    </div>
  );

}

export default GalleryModal;