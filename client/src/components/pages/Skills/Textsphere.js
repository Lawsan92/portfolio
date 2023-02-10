import React, { useState, useEffect } from 'react';
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { useTheme } from '../../ThemeContext.js'

const Textsphere = () => {

  const [sphereRadius, getSphereRadius] = useState((window.innerWidth < 450) ? Math.floor(window.innerWidth * 0.5) : Math.floor(window.innerWidth * 0.18));
  const [fontSize, getFontSize] = useState( (window.innerWidth < 450) ?  Math.floor((window.innerWidth * 0.18) * .2) : Math.floor((window.innerWidth * 0.18) * .1));

  const handleResize = () => {
    window.addEventListener('resize', () => {
      if ((window.innerWidth < 450)) {
        getSphereRadius(Math.floor(window.innerWidth * 0.5));
        getFontSize(Math.floor((window.innerWidth * 0.2) * 0.2));
      } else {
        getSphereRadius(Math.floor(window.innerWidth * 0.2));
        getFontSize(Math.floor((window.innerWidth * 0.2) * 0.1));
      }
    });
  }

  useEffect(() => {
    handleResize();
  }, [])

  const darkTheme = useTheme();

  const tags = [
    'JavaScript',
    'CSS',
    'HTML',
    'React',
    'Redux',
    'Sass',
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
    'Algorithms',
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
    <TagCloud options={options} style={ {fontSize: `${fontSize}px`, zIndex: 1 } }>
      {tags}
    </TagCloud>
  );
};

export default Textsphere;