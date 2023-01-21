import React, { useState, useEffect } from 'react';
import icons from '../../data/icons.js';
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { useTheme } from '../ThemeContext.js'

const Textsphere = () => {

  const [sphereRadius, getSphereRadius] = useState(Math.floor(window.innerWidth * 0.18));
  const [fontSize, getFontSize] = useState(Math.floor((window.innerWidth * 0.18) * .1));

  useEffect(() => {
    window.addEventListener('resize', () => {
      getSphereRadius(Math.floor(window.innerWidth * 0.2));
      getFontSize(Math.floor((window.innerWidth * 0.2) * 0.1));
    })
  }, [])

  const darkTheme = useTheme();

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
    radius: sphereRadius,
    maxSpeed: 'medium',
    initSpeed: 'medium',
    direction: 135,
    keep: true,
    useContainerInlineStyles: true,
  }


  return (
    <TagCloud options={options} style={ {fontSize: `${fontSize}px` } }>
      {tags}
    </TagCloud>
  );
};

export default Textsphere;