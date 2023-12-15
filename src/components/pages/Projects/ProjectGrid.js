import React, { useState, useEffect } from 'react';
import projects from '../../../data/projects.js';
import { GithubSVG, CameraSVG } from './../SVGicons.js';
import { useTheme } from '../../ThemeContext.js';

const ProjectGrid = ({isOpen, setModal, toggleModal, projectIndex, getIndex}) => {

    // dark mode context
    const darkTheme = useTheme();

    // card hover state & methods
    const [isHover, setHover] = useState(false);

    const [containerHeight, getHeight] = useState(Math.floor((window.innerHeight * .9) / 20));

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

    const toggleHover = (index) => {
      setHover((prevState) => ({...isHover, [index]: !prevState[index] }))
    }

  const mapProjects = () => {
    return projects.map((project, index) => {
      const CardShadow = ({toggleHover}) => {
        return (
          <span className='projects_grid card_shadow' style={styles.shadow} onMouseLeave={() => {setHover({...isHover, [index]: false})}} key={`card_shadow ${index}`}>
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


  // function to filter projects based on their tech stack

  const [cardFilter, getFilter] = useState('');

  const [isFiltered, setFilter] = useState(false);

  const handleFilter = () => {
    setFilter(prevState => !prevState)
  };

  const filterProjects = (e) => {
    return projects.map((project, index) => {
      if (project.techstack === e) {
        const CardShadow = ({toggleHover}) => {
          return (
            <span className='projects_grid card_shadow' style={styles.shadow} onMouseLeave={() => {setHover({...isHover, [index]: false})}} key={`card ${index}`}>
              <GithubSVG href={projects[index].githref} />
              <div className='projects_grid card_shadow text' style={styles.text}>
                see more
              </div>
              <CameraSVG toggleModal={toggleModal} isOpen={isOpen} index={index} toggleHover={toggleHover} projectIndex={projectIndex} getIndex={getIndex}/>
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
  };

  return (
    <div className='projects_grid container' >
      {!isFiltered ? mapProjects() : filterProjects(cardFilter)}
    </div>
  );
};

export default ProjectGrid;