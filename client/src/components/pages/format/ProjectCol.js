import React, { useState } from 'react';
import projects from '../../../data/projects.js';
import ProjectCard from '../ProjectCard';

const ProjectCol = () => {

    return projects.map((project, index) => {
      let mid = Math.floor(projects.length / 2);
      while(index < mid) {
        return (
      <div style={{display: 'flex', flexDirection:'row'}}>
      <div id='project-card'>
        <a href={projects[index].href}>
          <div id='project-card-img'
          style={{
              backgroundImage: `url(${projects[index].url})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>
        </div>
        </a>
        <p id='techstack'>{projects[index].techstack}</p>
        <h2 id='title'>{projects[index].name}</h2>
        <p id='summary'>{projects[index].summary}</p>
      </div>
      <div id='project-card'>
      <a href={projects[index + mid].href}>
        <div id='project-card-img'
        style={{
            backgroundImage: `url(${projects[index + mid].url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
      </div>
      </a>
      <p id='techstack'>{projects[index + mid].techstack}</p>
      <h2 id='title'>{projects[index + mid].name}</h2>
      <p id='summary'>{projects[index + mid].summary}</p>
    </div>
    </div>
        );
      }
  })
};

export default ProjectCol;





