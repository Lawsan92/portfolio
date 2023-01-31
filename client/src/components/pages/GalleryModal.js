import React, { useState } from 'react';
import projects from '../../data/projects.js';
import { LeftArrowSVG, RightArrowSVG } from './SVGicons.js';

const GalleryModal = ({ isOpen, toggleModal, projectIndex }) => {

  const [count, setCount] = useState(0);

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
        return <img src={gallery[count]} className='projects_gallery-modal card img'/>;
      } else {
        return <p>COMING SOON...</p>;
      }
  }

  return (
    <div className='projects_gallery-modal' >
      <div className='projects_gallery-modal background' /*onClick={() => {toggleModal()}}*/>
        <LeftArrowSVG setCount={setCount} count={count}/>
        <div className='projects_gallery-modal card'>
          {mapProjectGallery()}
        </div>
        <RightArrowSVG setCount={setCount} count={count}/>
      </div>
    </div>
  );

}

export default GalleryModal;