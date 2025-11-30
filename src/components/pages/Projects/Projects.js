import React, { useState, useEffect } from 'react';
import projects from '../../../data/projects.js';
import NavBar, { MobileNavbar } from '../NavBar/NavBar.js';
import { useTheme } from '../../ThemeContext.js';
import { GithubSVG, DownloadSVG} from './../SVGicons.js';
import { motion } from 'framer-motion';
import Mobile_Projects from './Mobile_Projects.js';
import useResize from '../../../hooks/useResize.js';

const Projects = ({ projectsRef }) => {

  useEffect(() => {
    handleMobileRender();
  }, []);

  // dark mode context
  const darkTheme = useTheme();
  const { windowWidth } = useResize();

  const body = document.querySelector('body');

  // container resizing state & methods
  const [containerWidth, getWidth] = useState((windowWidth < 450) ? Math.floor((windowWidth * .9)) : Math.floor((windowWidth * .9) / 5));
  const [containerHeight, getHeight] = useState(Math.floor((window.innerHeight * .9) / 20));


  // mobile navbar state & methods
  const [openMobileNavbar, setMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbar(prevState => !openMobileNavbar);
  };

  const handleMobileRender = () => {
    window.addEventListener('resize', () => {
      let width = window.getComputedStyle(document.querySelector('.projects_grid.container')).width;

      getWidth(width);
      let height = window.getComputedStyle(document.querySelector('.projects_grid.container')).height;
      height = Math.floor(Number(height.split('').slice(0, height.length - 2).join('')) / 20 )
      getHeight(height);
     });
  };

    // function to filter projects based on their tech stack
  const [cardFilter, getFilter] = useState('');
  const [isFiltered, setFilter] = useState(false);

  const toggleFilter = () => {
    setFilter(prevState => !prevState)
  };


  const styles = {
    card: {
      // gridRowEnd: `span ${containerHeight}`,
      gridRowEnd: `span ${containerHeight}`,
      gridRowEnd: `span 45`,
    },
  }

    const Categories = () => {

        let categories = ['programming', 'documentation'];

        let mapCategories = categories.map((category) => {
          return (
            <div
              className={ !darkTheme ? 'projects_categories card' : 'projects_categories card dark'}
              onClick={(e) => {toggleFilter(); getFilter(e.target.innerText)}}
            >{category}</div>
          );
        });
        return mapCategories;
      };


  const ProjectCards = () => {

    return projects.map((project, index) => {

      const CardShadow = () => {
        return (
          <span
          className='projects_grid card_shadow'
          key={`card_shadow ${index}`}
          >
            <div className='projects_grid card_shadow_wrapper'>
              <p>{project.summary}</p>
              {project.type == 'programming' ? <GithubSVG href={projects[index].githref} /> : <a href={project.href} download ><DownloadSVG/> </a>}
            </div>
          </span>
        );
      };

      const TechStack = () => {
        return ( <div className='projects_grid tech_stack'>
          {project.techstack.map((img_src, index) => {
              return <img src={img_src} className='projects_grid tech_stack img'/>;
                })}
            </div>)
        };


      if (isFiltered) {
        if (project.type === cardFilter) {
        return (
          <div
          className={ darkTheme ? 'projects_grid card dark' : 'projects_grid card'}
          style={styles.card}
          key={`card ${index}`}
          >
            <CardShadow/>
            <div className='projects_grid img_container'>
              {project.url.map((url, index )=> {return <img className={`projects_grid img_container_img _${index}`} src={url} alt={project.meta} />})}
            </div>
              <div className={darkTheme ? 'projects_grid text dark' : 'projects_grid text'}>
                <h4>
                  {project.name}
                </h4>
                <TechStack/>
              </div>
          </div>
        );
      }
      } else {
        return (
          <div
          className={ darkTheme ? 'projects_grid card dark' : 'projects_grid card'}
          style={styles.card}
          key={`card ${index}`}
          >
            <CardShadow/>
            <div className='projects_grid img_container'>
              {project.url.map((url, index )=> {return <img className={`projects_grid img_container_img _${index}`} src={url} alt={project.meta} />})}
            </div>
              <div className={darkTheme ? 'projects_grid text dark' : 'projects_grid text'}>
                <h4>
                  {project.name}
                </h4>
                <TechStack/>
              </div>
          </div>
        );
      }
    });
  };

  const mobileScreen = windowWidth < 450;

  if (mobileScreen) {
    return <Mobile_Projects/>;
  };

  return (
    <motion.section
      className={ darkTheme ? 'projects_container dark' : 'projects_container'}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
      <NavBar/>
      <h2>Projects</h2>
      <div className='projects_categories'>
        <Categories/>
      </div>
      <div className='projects_grid container' >
        <ProjectCards/>
      </div>
    </motion.section>
  );
}

export default Projects;
