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
    return <img src={gallery[count]} className='projects_gallery-modal card img'/>;
  }

  return (
    <div className='projects_gallery-modal' >
      <div className='projects_gallery-modal background' /*onClick={() => {toggleModal()}}*/>
        <LeftArrowSVG setCount={setCount} count={count}/>
      {/* <button style={{height: '1em', width: '1em', marginRight: 'auto', zIndex: 5, cursor: 'pointer'}} onClick={() => {setCount(count - 1)}}>-</button> */}
        <div className='projects_gallery-modal card'>
          {mapProjectGallery()}
        </div>
        <RightArrowSVG setCount={setCount} count={count}/>
        {/* <button style={{height: '1em', width: '1em',  marginLeft: 'auto', zIndex: 5, cursor: 'pointer'}} onClick={() => {setCount(count + 1)}}>+</button> */}
      </div>
    </div>
  );

}

export default GalleryModal;