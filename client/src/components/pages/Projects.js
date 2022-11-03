import React from 'react';

import projects from '../../data/projects.js';

const Projects = ({ projectsRef }) => {

  const renderProjects = () => {
    return projects.map((project, index) => {
      let mid = Math.floor(projects.length / 2);
      while(index < mid) {
        return (
          <div id='project'>
            <div id='col'>
              <a href={projects[index].href}>
                <img src={projects[index].url} href/>
              </a>
            </div>
            <div id='col'>
              <a href={projects[index + 1].href}>
                <img src={projects[index + mid].url} href/>
              </a>
              </div>
          </div>
        );
      }
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