import React, { useState } from 'react';
import projects from '../../../data/projects.js';
import ProjectCard from '../ProjectCard';

const ProjectCol = () => {

  const [gitSVG, setSVG] = useState(true);
  let gitB = "https://res.cloudinary.com/darp0mj9i/image/upload/v1667398265/icons/icons8-github_ld3amz.svg";
  let gitW = "https://res.cloudinary.com/darp0mj9i/image/upload/v1670091319/icons/icons8-github_ld3amz_neg4sd.svg";

  const hoverHandler = (id) => {
    setSVG((prevState) => ({
      ...gitSVG,
      [id]: !prevState[id]
    }))
  }

  const renderProjectColumms = () => {
    return projects.map((project, index) => {
      let mid = Math.floor(projects.length / 2);
      while (index < mid) { {/* By the time index meets the mid point, the 2nd row will have reached the last element */}
        return (
      <div id='col'>
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
        <p id='techstack'>
          {projects[index].techstack}
          <span>
            <a href={projects[index].githref !== '' ? projects[index].githref : null}>
              <img src={gitSVG[index] ? gitW : gitB}
              onMouseEnter={() => hoverHandler(index)}
              onMouseLeave={() => hoverHandler(index)}/>
            </a>
          </span>
        </p>
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
      <p id='techstack'>
        {projects[index + mid].techstack}
        <span>
          <a href={projects[index + mid].githref !== '' ? projects[index + mid].githref : null}>
          <img src={gitSVG[index + mid] ? gitW : gitB}
              onMouseEnter={() => hoverHandler(index + mid)}
              onMouseLeave={() => hoverHandler(index + mid)}/>
          </a>
        </span>
      </p>
      <h2 id='title'>{projects[index + mid].name}</h2>
      <p id='summary'>{projects[index + mid].summary}</p>
    </div>
    </div>
        );
      }
    })
  }

  return (
    <div id='project-col'>
      {renderProjectColumms()}
    </div>
  );
};

export default ProjectCol;





