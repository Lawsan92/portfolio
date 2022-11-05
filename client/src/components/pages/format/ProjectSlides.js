import React, { useState } from 'react';
import projects from '../../../data/projects.js';
import ProjectCard from '../ProjectCard';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ProjectSlides = () => {

  // State and functions for slides
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

  // iterate through the array and map each item onto a div
   // if the current index is equal to the current slide
          // set the id of the div to be active
        // otherwise
          // set it to be inactive
          // If the current index is equal to the current slide
            // return the 'project-card' div containing the data of the current project
          // otherwise
            // don't return the project card

  // function for slides
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
    <div id='project-slides' style={{display: 'flex'}}>
      <FaArrowAltCircleLeft style={{alignSelf: 'center'}} onClick={() => {changeSlides.prevSlide()}}/>
        {projectSlider()}
      <FaArrowAltCircleRight style={{alignSelf: 'center'}} onClick={() => {changeSlides.nextSlide()}}/>
    </div>
  )
};

export default ProjectSlides;
