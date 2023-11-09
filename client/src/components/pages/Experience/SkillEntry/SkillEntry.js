import React, { useState } from 'react'
import { skills_data } from '../../../../data/skills_data.js';

const SkillEntry = ({ openMobileNavbar }) => {

  // MAPPING FUNCTIONS

  const mapSkills = () => {
    return skills_data.map((item) => {
      return (
        <div className='skills_graph entry'>
          <div className='skills_graph entry header'>
            <h3>{item.header}</h3>
            <img src={item.img}/>
          </div>
          <div className='skills_graph entry_meter container'>
            <div className={`skills_graph entry_meter ${item.className}`} style={{zIndex: openMobileNavbar && 0}}/>
            <div className='skills_graph entry_meter background'/>
          </div>
        </div>
      );
    })
  ;}

  return (
    <div className='skill_entry'>
      {mapSkills()}
    </div>
  );
}

export default SkillEntry;