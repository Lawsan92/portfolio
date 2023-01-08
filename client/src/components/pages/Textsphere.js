import React, { useState, useEffect } from 'react';
import icons from '../../data/icons.js';
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const Textsphere = () => {

  const tags = [
    'JavaScript',
    'CSS',
    'HTML',
    'React',
    'Redux',
    'Git',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Express',
    'Jest',
    'Webpack',
    'threejs',
    'AWS',
    'npm',
    'nano',
    'vim'
  ];

  const options = {
    radius: 300,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true,
  }


  return (
    <div className='about_textsphere'>
      <TagCloud options={options}>
        {tags}
      </TagCloud>
    </div>
  );
};

export default Textsphere;