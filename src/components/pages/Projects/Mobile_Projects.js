import React, { useState, useEffect } from 'react';
import projects from '../../../data/projects.js';
import MobileNavbar from '../NavBar/Mobile_Navbar.js';;
import { useTheme } from '../../ThemeContext.js';
import { GithubSVG, DownloadSVG} from './../SVGicons.js';
import { motion } from 'framer-motion';
import { MenuIcon } from '../Home/Mobile_Home';

const Mobile_Projects = ({ pageRef }) => {

  useEffect(() => {
    pageRef.current['/projects'] = true;
  }, []);

  // dark mode context
  const darkTheme = useTheme();


  // mobile navbar state & methods
  const [openMobileNavbar, setMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbar(prevState => !openMobileNavbar);
  };


    // function to filter projects based on their tech stack
  const [cardFilter, getFilter] = useState('');
  const [isFiltered, setFilter] = useState(false);

  const toggleFilter = () => {
    setFilter(prevState => !prevState)
  };


  const styles = {
    card: {
      gridRowEnd: `span 45`,
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

  return (
    <motion.section
      className={ darkTheme ? 'projects_container dark' : 'projects_container'}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
      {openMobileNavbar && <MobileNavbar toggleMobileNavbar={toggleMobileNavbar}/>}
      <h2>Projects</h2>
      <MenuIcon toggleMobileNavbar={toggleMobileNavbar}/>
      <div className='projects_categories'>
        <Categories/>
      </div>
      <div className='mobile_projects_grid container' >
        <ProjectCards/>
      </div>
    </motion.section>
  );
}

export default Mobile_Projects;