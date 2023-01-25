import React, { useState } from 'react';
import projects from '../../data/projects.js';

const GalleryModal = ({ isOpen, toggleModal, projectIndex }) => {

  const mapProjectGallery = () => {
    console.log('projectIndex:', projectIndex);
    const gallery = projects[projectIndex].gallery;
    return gallery.map((url, index) => {
      console.log('url:', url);
      return <img src={gallery[index]} className='projects_gallery-modal card img'/>;
    })
  }

  return (
    <div className='projects_gallery-modal' onClick={() => { toggleModal()}}>
      <div className='projects_gallery-modal background'>
        <div className='projects_gallery-modal card'>
        {mapProjectGallery()}
        </div>
      </div>
    </div>
  );

}

export default GalleryModal;