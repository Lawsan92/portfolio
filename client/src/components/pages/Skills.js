import React from 'react';

import icons from '../../data/icons.js'

const Skills = ({ skillsRef }) => {

  const mapIcons = () => {
    return icons.map((icon, index) => {
      let mid = Math.floor(icons.length / 2);
      while (index < mid) {
        return (
          <div id='icon' key={index}>
            <div id='row'>
              <h3>{icons[index].title}</h3>
              <img style={{margin: '10px'}} src={icons[index].url}/>
            </div>
            <div id='row'>
              <h3>{icons[index + mid].title}</h3>
              <img style={{margin: '10px'}} src={icons[index + mid].url}/>
            </div>
          </div>
        );
      }
    })
  };

  return (
    <section id='skills' ref={skillsRef}>
      <h1>{'Skills'}</h1>
      <div id='icons'>
        { mapIcons() }
      </div>
    </section>
  )
}

export default Skills;