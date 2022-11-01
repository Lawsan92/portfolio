import React from 'react';

import icons from '../../data/icons.js'

const Skills = () => {

  const mapIcons = () => {
    return icons.map((icon) => {
      return (
        <div id='icon'>
          <h3>{icon.title}</h3>
          <img src={icon.url} style={{ border: 'solid 1px' }}/>
        </div>
      );
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