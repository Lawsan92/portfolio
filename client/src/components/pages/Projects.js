import React, { useState } from 'react';
import projects from '../../data/projects.js';
import ProjectCard from './ProjectCard';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Projects = ({ projectsRef }) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const length = projects.length;

  const changeSlides = {
    nextSlide: () => {
      setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    },
    prevSlide: () => {
      setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide + -1);
    }
  }

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

  const projectSlider = () => {

    return projects.map((project, index) => {
      return (
        <div id={index === currentSlide ? 'slide active' : 'slide'}>
       {index === currentSlide && <div id='project-card'>
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
        </div>}
        </div>
      );
    })
  }



  return (
    <section id='projects' ref={projectsRef}>
      <h1>{'Projects'}</h1>
      <FaArrowAltCircleLeft onClick={() => {changeSlides.prevSlide()}}/>
      {projectSlider()}
      <FaArrowAltCircleRight onClick={() => {changeSlides.nextSlide()}}/>
    </section>
  )
}

export default Projects;