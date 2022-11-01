import React from 'react';

import icons from '../../data/icons.js'

const Skills = () => {

  const mapIcons = () => {
    return icons.map((icon, index) => {
      let mid = Math.floor(icons.length / 2);
      while (index < mid) {
        return (
          <div id='icon' key={index}>
            <div id='row1'>
              <h3>{icons[index].title}</h3>
              <img src={icons[index].url} style={{ border: 'solid 1px', maxHeight: '80%' }}/>
            </div>
            <div id='row2'>
              <h3>{icons[mid].title}</h3>
              <img src={icons[index + mid].url} style={{ border: 'solid 1px' }}/>
            </div>
          </div>
        );
      }
    })
  };

  return (
    <section id='skills'>
      <h1>Skills</h1>
      <div id='icons'>
        { mapIcons() }
      </div>
    </section>
  )
}

export default Skills;