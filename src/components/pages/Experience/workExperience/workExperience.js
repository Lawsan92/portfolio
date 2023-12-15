import React, { useState } from 'react';
import { useTheme } from '../../../ThemeContext.js';
import { workExperience_data } from '../../../../data/workExperience_data.js';

const WorkExperience = () => {
  // FUNCTION TO SET DARK THEME
  const darkTheme = useTheme();

  const setDarkTheme = () => {
  return darkTheme ? 'dark' : '';
  };

  // MAPPING FUNCTIONS
  const mapExperience = () => {
    return workExperience_data.map((item) => {
      return (
        <div className={`experience_entry ${setDarkTheme()}`}>
          <h3 className={`experience_entry role ${setDarkTheme()}`}>{item.title}</h3>
          <h3 className={`experience_entry company ${setDarkTheme()}`}>{item.company}</h3>
          <p className={`experience_entry timeline ${setDarkTheme()}`}>{item.timeline}</p>
          <p className={`experience_entry summary ${setDarkTheme()}`}> {item.summary}</p>
      </div>
      )
    })
  };

  return (
    <div className='workExperience'>
      {mapExperience()}
    </div>
  );
}

export default WorkExperience;