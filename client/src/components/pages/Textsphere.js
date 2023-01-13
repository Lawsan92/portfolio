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
    'React-Router-Dom',
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
    'vim',
    'K6',
    'Bootstrap',
    'Loader.io',
    'Data Structures',
    'Algorithms'
  ];

  const options = {
    radius: 300,
    maxSpeed: 'medium',
    initSpeed: 'medium',
    direction: 135,
    keep: true,
    useContainerInlineStyles: true
  }


  return (
    <TagCloud options={options} style={{fontSize: '3.5vh'}}>
      {tags}
    </TagCloud>
  );
};

export default Textsphere;