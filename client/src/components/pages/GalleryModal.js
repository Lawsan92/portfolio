import React, { useState } from 'react';

const GalleryModal = ({ isOpen, toggleModal }) => {

  return (
    <div className='projects_gallery-modal' onClick={() => { toggleModal()}}>
      <div className='projects_gallery-modal background'>
        <div className='projects_gallery-modal card'>
        Gallery Modal
        </div>
      </div>
    </div>
  );

}

export default GalleryModal;