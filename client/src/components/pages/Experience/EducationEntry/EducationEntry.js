import React, { useState } from 'react';
import { useTheme } from '../../../ThemeContext.js';
import { education_data } from '../../../../data/education_data.js';

const EducationEntry = () => {

   // FUNCTION TO SET DARK THEME
   const darkTheme = useTheme();

   const setDarkTheme = () => {
   return darkTheme ? 'dark' : '';
   };

   // MAPPING FUNCTIONS
   const mapEducation = () => {
     return education_data.map((item) => {
       return (
         <div className={`education_entry ${setDarkTheme()}`}>
           <h3 className={`education_entry degree ${setDarkTheme()}`}>{item.degree}</h3>
           <h3 className={`education_entry school ${setDarkTheme()}`}>{item.school}</h3>
           <p className={`education_entry timeline ${setDarkTheme()}`}>{item.timeline}</p>
           <p className={`education_entry summary ${setDarkTheme()}`}> {item.summary}</p>
       </div>
       )
     })
   };
  return (
    <div className=''>
      {mapEducation()}
    </div>
  );
}

export default EducationEntry;