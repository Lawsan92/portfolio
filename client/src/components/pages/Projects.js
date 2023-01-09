import React, { useState, useEffect } from 'react';
import projects from '../../data/projects.js';
import ProjectCard from './ProjectCard';
import ProjectCol from './format/ProjectCol';
import ProjectSlides from './format/ProjectSlides';
import NavBar from './NavBar';

const Projects = ({ projectsRef }) => {

  const [containerWidth, getWidth] = useState(Math.floor((window.innerWidth * .8) / 4));


  useEffect(() => {
   window.addEventListener('resize', () => {
    let width = window.getComputedStyle(document.querySelector('.projects_grid.container')).width;
    width = Math.floor(Number(width.split('').slice(0, width.length - 2).join('')) /4 )
    getWidth(width);
   });
  }, [])

  const mapProjects = () => {
    return projects.map((project) => {
      return (
        <div className='projects_grid card'>
          <img src={project.url}/>
        </div>
      )
    });
  }

  const styles = {
    container: {
      border: 'solid',
      display: 'grid',
      width: '80vw',
      height: '90vh',
      gridTemplateColumns: `repeat(auto-fill, ${containerWidth}px)`,
      gridAutoRows: '10px'
    }
  }

  return (
    <section id='projects' ref={projectsRef}>
      <NavBar/>
      <div className='projects_container'>
        <div className='projects_header'>
          <div id='border'/>
          <h1>{'Projects'}</h1>
        </div>
        <div className='projects_grid container' style={styles.container} >
          {mapProjects()}
        </div>
      </div>
    </section>
  )
}

export default Projects;

   {/* <ProjectCol/> */}
   {/* <ProjectSlides/> */}