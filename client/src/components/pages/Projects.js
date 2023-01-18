import React, { useState, useEffect } from 'react';
import projects from '../../data/projects.js';
import NavBar from './NavBar';
import { useTheme } from '../ThemeContext.js';

const Projects = ({ projectsRef }) => {

  const darkTheme = useTheme();

  const [containerWidth, getWidth] = useState(Math.floor((window.innerWidth * .9) / 5));
  const [containerHeight, getHeight] = useState(Math.floor((window.innerHeight * .9) / 20));

  const [isHover, setHover] = useState(false);

  const toggleHover = (index) => {
    setHover({...isHover, [index]: !isHover })
  }

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


  const styles = {
    container: {
      gridTemplateColumns: `repeat(auto-fill, ${containerWidth}px)`,
    },
    card: {
      gridRowEnd: `span ${containerHeight}`,
    },
    shadow: {
      height: '95%',
      width: '90%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 3,
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
  }

  const mapProjects = () => {
    return projects.map((project, index) => {
      // if (!isHover) {
        return (
          <div className={ !darkTheme ? 'projects_grid card' : 'projects_grid card dark'} style={styles.card} onMouseLeave={() => {toggleHover(index)}} onMouseEnter={() => {toggleHover(index)}}>
            <img className='projects_grid img' src={project.url} />
              <div className='projects_grid text'>
                <div className='projects_grid text title'>
                  {project.name}
                </div>
                <div className='projects_grid text summary'>
                  {project.summary}
                </div>
              </div>
          </div>
        );
      // } else {
      //   return (
      //     <div className='projects_grid card' style={styles.card} onMouseLeave={() => {toggleHover(index)}} onMouseEnter={() => {toggleHover(index)}}>
      //       {/* <span
      //         className='projects_grid card_shadow'
      //         style={styles.shadow}
      //         onClick={() => {setHover({...hover, [index]: true})}}
      //         // onMouseLeave={() => {setHover({...hover, [index]: false})}}
      //         >
      //         <div className='projects_grid card_shadow text' style={styles.text}>
      //           see more
      //         </div>
      //         </span> */}
      //       <img className='projects_grid img' src={project.url} />
      //         <div className='projects_grid text'>
      //           <div className='projects_grid text title'>
      //             {project.name}
      //           </div>
      //           <div className='projects_grid text summary'>
      //             {project.summary}
      //           </div>
      //         </div>
      //     </div>
      //   );
      // }

    });
  }

  const mapCategories = () => {
    let categories = ['Backend', 'FrontEnd', 'Mobile', 'ReactJS']
    return categories.map((category) => {
      return (<div className={ !darkTheme ? 'projects_categories card' : 'projects_categories card dark'}>{category}</div>)
    })
  }

  return (
    <section id='projects' ref={projectsRef}>
      <NavBar/>
      <div className={ darkTheme ? 'projects_container dark' : 'projects_container'}>
        <div className={ !darkTheme ? 'projects_container header' : 'projects_container header dark' }>
          <h1>Projects</h1>
        </div>
        <div className='projects_categories'>
          {mapCategories()}
        </div>
        <div className='projects_grid container' style={styles.container} >
          {mapProjects()}
        </div>
      </div>
    </section>
  )
}

export default Projects;
