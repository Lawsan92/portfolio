import React, { useState, useEffect } from 'react';
import projects from '../../../data/projects.js';
import NavBar, { MobileNavbar } from '../NavBar/NavBar.js';
import { useTheme } from '../../ThemeContext.js';
import { GithubSVG, DownloadSVG} from './../SVGicons.js';
import { motion } from 'framer-motion';
import Mobile_Projects from './Mobile_Projects.js';
import useResize from '../../../hooks/useResize.js';

const Projects = ({ projectsRef }) => {

  // dark mode context
  const darkTheme = useTheme();
  const { windowWidth } = useResize();

  const body = document.querySelector('body');

  // container resizing state & methods
  const [containerWidth, getWidth] = useState((windowWidth < 450) ? Math.floor((windowWidth * .9)) : Math.floor((windowWidth * .9) / 5));
  const [containerHeight, getHeight] = useState(Math.floor((window.innerHeight * .9) / 20));

  // card hover state & methods
  const [isHover, setHover] = useState(false);

  const toggleHover = (index) => {
    setHover((prevState) => ({...isHover, [index]: !prevState[index] }))
  }

  // mobile navbar state & methods
  const [openMobileNavbar, setMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbar(prevState => !openMobileNavbar);
  }

  const handleMobileRender = () => {
    window.addEventListener('resize', () => {


      let width = window.getComputedStyle(document.querySelector('.projects_grid.container')).width;

      getWidth(width);
      let height = window.getComputedStyle(document.querySelector('.projects_grid.container')).height;
      height = Math.floor(Number(height.split('').slice(0, height.length - 2).join('')) / 20 )
      getHeight(height);

     });
  }

  useEffect(() => {
    handleMobileRender();
  }, []);


  const styles = {
    card: {
      // gridRowEnd: `span ${containerHeight}`,
      gridRowEnd: `span ${containerHeight}`,
      gridRowEnd: `span 46`,
    },
    shadow: {
      marginTop: '5%',
      height: '65%',
      width: '90%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 3,
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '6%',
      color: '#ffffff'
    },
    text: {
      alignSelf: 'end'
    }
  }


  const mapProjects = () => {

    return projects.map((project, index) => {

      const CardShadow = ({toggleHover}) => {
        return (
          <span
          className='projects_grid card_shadow'
          style={styles.shadow}
          onMouseLeave={() => {setHover({...isHover, [index]: false})}}
          key={`card_shadow ${index}`}
          >

            {project.type == 'programming' ? <GithubSVG href={projects[index].githref} /> : <a href={project.href} download ><DownloadSVG/> </a>}
            <div className='projects_grid card_shadow text' style={styles.text}>
            see more
            </div>
          </span>
        );
      }

      if (!isHover[index]) {
        return (
          <div className={ !darkTheme ? 'projects_grid card' : 'projects_grid card dark'} style={styles.card} key={`card ${index}`}>
            <div className='projects_grid img_container'>
              <img className='projects_grid img_container img' src={project.url} alt={project.meta} onMouseLeave={() => {toggleHover(index)}} onMouseEnter={() => {toggleHover(index)}} />
              <span className={!darkTheme ? 'projects_grid img_container desc' : 'projects_grid img_container desc dark' }>{project.techstack}</span>
            </div>
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
      } else {
        return (
          <div className='projects_grid card' style={styles.card} key={`card ${index}`}>
            <CardShadow index={index} toggleHover={toggleHover}/>
            <div className='projects_grid img_container'>
              <img className='projects_grid img_container img' src={project.url} alt={project.meta} onMouseLeave={() => {toggleHover(index)}} onMouseEnter={() => {toggleHover(index)}} />
              <span className={!darkTheme ? 'projects_grid img_container desc' : 'projects_grid img_container desc dark' }>{project.techstack}</span>
            </div>
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
      }
    });
  }

  const renderCategories = () => {

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

  // function to filter projects based on their tech stack

  const [cardFilter, getFilter] = useState('');

  const [isFiltered, setFilter] = useState(false);

  const toggleFilter = () => {
    setFilter(prevState => !prevState)
  };

  const filterCards = (filter) => {

    let mapProjects = projects.map((project, index) => {


      if (project.type === filter) {
        const CardShadow = ({toggleHover}) => {
          return (
            <span
            className='projects_grid card_shadow'
            style={styles.shadow}
            onMouseLeave={() => {setHover({...isHover, [index]: false})}}
            key={`card ${index}`}
            >
            {project.type == 'programming' ? <GithubSVG href={projects[index].githref} /> : <DownloadSVG/>}
              <div className='projects_grid card_shadow text' style={styles.text}>
              see more
              </div>
            </span>
          );
        };

        if (!isHover[index]) {
          return (
            <div className={ !darkTheme ? 'projects_grid card' : 'projects_grid card dark'} style={styles.card} key={`card ${index}`}>
              <div className='projects_grid img_container'>
                <img className='projects_grid img_container img' src={project.url} alt={project.meta} onMouseLeave={() => {toggleHover(index)}} onMouseEnter={() => {toggleHover(index)}} />
                <span className={!darkTheme ? 'projects_grid img_container desc' : 'projects_grid img_container desc dark' }>{project.techstack}</span>
              </div>
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
        } else {
          return (
            <div className='projects_grid card' style={styles.card} key={`card ${index}`}>
              <CardShadow index={index} toggleHover={toggleHover}/>
              <div className='projects_grid img_container'>
                <img className='projects_grid img_container img' src={project.url} alt={project.meta} onMouseLeave={() => {toggleHover(index)}} onMouseEnter={() => {toggleHover(index)}} />
                <span className={!darkTheme ? 'projects_grid img_container desc' : 'projects_grid img_container desc dark' }>{project.techstack}</span>
              </div>
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
        }
      }
    })

    return mapProjects
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
        {renderCategories()}
      </div>
      <div className='projects_grid container' >
        {!isFiltered ? mapProjects() : filterCards(cardFilter)}
      </div>
    </motion.section>
  );
}

export default Projects;
