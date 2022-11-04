import React from 'react';

import projects from '../../data/projects.js';
import ProjectCard from './ProjectCard';
const Projects = ({ projectsRef }) => {

  const renderProjects = () => {
    return projects.map((project, index) => {
      // let mid = Math.floor(projects.length / 2);
      // while(index < mid) {
        return (
      //     <div id='project'>
      //       <div id='col'>
      //         <a href={projects[index].href}>
      //           <img src={projects[index].url} href/>
      //         </a>
      //       </div>
      //       <div id='col'>
      //         <a href={projects[index + 1].href}>
      //           <img src={projects[index + mid].url} href/>
      //         </a>
      //         </div>
      //     </div>
      <div id='project-card'>
        <a href={project.href}>
          <div id='project-card-img'
          style={{
              backgroundImage: `url(${project.url})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>
        </div>
        </a>
        <p id='techstack'>{project.techstack}</p>
        <h2 id='title'>{project.name}</h2>
        <p id='summary'>{project.summary}</p>
      </div>
        );
      // }
    })
  };

  return (
    <section id='projects' ref={projectsRef}>
      <h1>{'Projects'}</h1>
      {renderProjects()}
    </section>
  )
}

export default Projects;