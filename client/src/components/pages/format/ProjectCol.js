import React, { useState } from 'react';
import projects from '../../../data/projects.js';
import ProjectCard from '../ProjectCard';

const ProjectCol = () => {

    return projects.map((project, index) => {
      let mid = Math.floor(projects.length / 2);
      while (index < mid) { {/* By the time index meets the mid point, the 2nd row will have reached the last element */}
        return (
      <div style={{display: 'flex', flexDirection:'row', margin: '20px'}}>
        {/*We're splitting our component in two by returning two divs instead of one */}
      <div id='project-card'> {/* (1) */}
        <a href={projects[index].href}>
          <div id='project-card-img'
          style={{ // these properties stetch and fit the image to fit the background
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
      <div id='project-card'> {/* (2) */}
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





