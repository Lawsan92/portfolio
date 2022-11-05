import React, { useState } from 'react';
import projects from '../../data/projects.js';
import ProjectCard from './ProjectCard';
import ProjectCol from './format/ProjectCol';
import ProjectSlides from './format/ProjectSlides';


const Projects = ({ projectsRef }) => {
  return (
    <section id='projects' ref={projectsRef}>
      <h1>{'Projects'}</h1>
      <ProjectCol/>
      {/* <ProjectSlides/> */}
    </section>
  )
}

export default Projects;