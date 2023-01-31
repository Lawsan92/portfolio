import React, { useState, useEffect } from 'react';
import projects from '../../data/projects.js';
import NavBar, { MobileNavbar } from './NavBar';
import { useTheme } from '../ThemeContext.js';
import { GithubSVG, CameraSVG } from './SVGicons.js';
import GalleryModal from './GalleryModal.js';
import { motion } from 'framer-motion';


const Projects = ({ projectsRef }) => {

  // dark mode context
  const darkTheme = useTheme();

  const body = document.querySelector('body');
  darkTheme ? body.style.backgroundColor = '#1d1d1d' : body.style.backgroundColor = '';

  // container resizing state & methods
  const [containerWidth, getWidth] = useState((window.innerWidth < 450) ? Math.floor((window.innerWidth * .9)) : Math.floor((window.innerWidth * .9) / 5));
  const [containerHeight, getHeight] = useState(Math.floor((window.innerHeight * .9) / 20));

  // card hover state & methods
  const [isHover, setHover] = useState(false);

  const toggleHover = (index) => {
    setHover((prevState) => ({...isHover, [index]: !prevState[index] }))
  }

  // gallery modal state & methods
  const [isOpen, setModal] = useState(false);

  const toggleModal = () => {
    setModal(prevState => !isOpen)
  }

  const [projectIndex, getIndex] = useState(-1);

  const [windowWidth, getWindowWidth] = useState(window.innerWidth);

  // mobile navbar state & methods
  const [openMobileNavbar, setMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbar(prevState => !openMobileNavbar)
  }


  useEffect(() => {

   window.addEventListener('resize', () => {

    getWindowWidth(window.innerWidth);

    // console.log('window.innerWidth:', window.innerWidth);

    let width = window.getComputedStyle(document.querySelector('.projects_grid.container')).width;

    getWidth(width);
    let height = window.getComputedStyle(document.querySelector('.projects_grid.container')).height;
    height = Math.floor(Number(height.split('').slice(0, height.length - 2).join('')) / 20 )
    getHeight(height);


   });
  }, []);


  const styles = {
    container: {
      gridTemplateColumns: `repeat(auto-fill, 360px)`,
    },
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
          // onClick={() => {setHover({...isHover, [index]: true})}}
          onMouseLeave={() => {setHover({...isHover, [index]: false})}}
          >
            <GithubSVG href={projects[index].githref} />
            <div className='projects_grid card_shadow text' style={styles.text}>
            see more
            </div>
            <CameraSVG toggleModal={toggleModal} isOpen={isOpen} index={index} toggleHover={toggleHover} projectIndex={projectIndex} getIndex={getIndex}/>
          </span>
        );
      }

      if (!isHover[index]) {
        return (
          <div className={ !darkTheme ? 'projects_grid card' : 'projects_grid card dark'} style={styles.card}>
            <img className='projects_grid img' src={project.url} onMouseLeave={() => {toggleHover(index)}} onMouseEnter={() => {toggleHover(index)}}/>
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
          <div className='projects_grid card' style={styles.card}>
            <CardShadow index={index} toggleHover={toggleHover}/>
            <img className='projects_grid img' src={project.url} onMouseLeave={() => {toggleHover(index)}} onMouseEnter={() => {toggleHover(index)}} />
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

  const mapCategories = () => {
    let categories = ['Backend', 'FrontEnd', 'Mobile', 'ReactJS']
    return categories.map((category) => {
      return (<div className={ !darkTheme ? 'projects_categories card' : 'projects_categories card dark'}>{category}</div>)
    })
  }


  if (windowWidth < 450) {
    if (!openMobileNavbar) {
      return (
        <motion.section
        className='projects'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
          <div className='navbar_pulldown' onClick={() => {toggleMobileNavbar()}}>
            <div className='navbar_pulldown_bar'/>
            <div className='navbar_pulldown_bar'/>
            <div className='navbar_pulldown_bar'/>
          </div>
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
          {isOpen && <GalleryModal isOpen={isOpen} toggleModal={toggleModal} projectIndex={projectIndex}/> }
        </motion.section>
      );
    } else {
      return (
           <motion.section
        className='projects'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
          <MobileNavbar toggleMobileNavbar={toggleMobileNavbar} />
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
          {isOpen && <GalleryModal isOpen={isOpen} toggleModal={toggleModal} projectIndex={projectIndex}/> }
        </motion.section>
      );
    }
  }

  return (
    <motion.section
      className='projects'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
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
      {isOpen && <GalleryModal isOpen={isOpen} toggleModal={toggleModal} projectIndex={projectIndex}/> }
    </motion.section>
  );
}

export default Projects;
