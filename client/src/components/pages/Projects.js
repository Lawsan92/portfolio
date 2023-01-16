import React, { useState, useEffect } from 'react';
import projects from '../../data/projects.js';
import NavBar from './NavBar';
import { useTheme } from '../ThemeContext.js';

const Projects = ({ projectsRef }) => {

  const darkTheme = useTheme();

  const [containerWidth, getWidth] = useState(Math.floor((window.innerWidth * .9) / 4));
  const [containerHeight, getHeight] = useState(Math.floor((window.innerHeight * .9) / 20));

  const [hover, setHover] = useState(false);

  useEffect(() => {
   window.addEventListener('resize', () => {

    let width = window.getComputedStyle(document.querySelector('.projects_grid.container')).width;
    width = Math.floor(Number(width.split('').slice(0, width.length - 2).join('')) /4 )
    getWidth(width);

    let height = window.getComputedStyle(document.querySelector('.projects_grid.container')).height;
    height = Math.floor(Number(height.split('').slice(0, height.length - 2).join('')) / 20 )
    getHeight(height);


   });
  }, [])

  const mapProjects = () => {
    return projects.map((project, index) => {
      return !hover ? (
        <div
          className='projects_grid card'
          style={styles.card}
          >
          <img
            src={project.url}
            style={styles.img}
            />
          {/* <span
            className='projects_grid card_shadow'
            style={styles.shadow}
            onClick={() => {setHover({...hover, [index]: true})}}
            // onMouseLeave={() => {setHover({...hover, [index]: false})}}
            >
              <div className='projects_grid card_shadow text' style={styles.text}>
                see more
              </div>
            </span> */}
        </div>
      ) : (
        <div
          className='projects_grid card'
          style={styles.card}
          >
          <img
            src={project.url}
            style={styles.img}
            onClick={() => {setHover({...hover, [index]: false})}}
            // onMouseLeave={() => {setHover({...hover, [index]: false})}}
            />
        </div>
      )
    });
  }

  const styles = {
    container: {
      // border: 'solid',
      display: 'grid',
      width: '90vw',
      height: '100vh',
      gridTemplateColumns: `repeat(auto-fill, ${containerWidth}px)`,
      gridAutoRows: '10px'
    },
    card: {
      // border: 'solid',
      gridRowEnd: `span ${containerHeight}`,
      gridColumnEnd: 'span 1',
      display: 'flex',
      // opacity: 0.7
    },
    img: {
      width: '100%'
    },
    shadow: {
      height: `${containerHeight * 10}px`,
      width: `${containerWidth * 2}px`,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 3,
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      height: '10vh',
      width: '20vw',
      backgroundColor: 'white',
      color: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '5vh'
    }
  }

  return (
    <section id='projects' ref={projectsRef}>
      <NavBar/>
      <div className={ darkTheme ? 'projects_container dark' : 'projects_container'}>
        {/* <div className='projects_header'>
          <div id='border'/>
          <h1>{'Projects'}</h1>
        </div> */}
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