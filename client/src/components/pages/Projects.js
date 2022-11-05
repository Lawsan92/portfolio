import React from 'react';

import projects from '../../data/projects.js';

const Projects = () => {

  const renderProjects = () => {
   return projects.map((project) => {
      return (
        <div id='project'>
          <a href={project.href}>
            <img id='project-img' src={project.url} href/>
          </a>
        </div>
      )
    })
  }

  return (
    <section id='projects'>
      <h1>Projects</h1>
      {renderProjects()}
    </section>
  )
}

export default Projects;