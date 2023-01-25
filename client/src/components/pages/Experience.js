import React, { useState, useEffect } from 'react';
import NavBar, { MobileNavbar } from './NavBar.js';
import { useTheme } from '../ThemeContext.js';
import { FrontEndSVG, BackEndSVG } from './SVGicons.js';

const Experience = ({ experienceRef }) => {

  const darkTheme = useTheme()

  const [windowWidth, getWindowWidth] = useState(window.innerWidth);
  const [openMobileNavbar, setMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbar(prevState => !openMobileNavbar)
  }

    useEffect(() => {
      window.addEventListener('resize', () => {
        getWindowWidth(window.innerWidth);
      })
    }, [])


    if (windowWidth < 450) {
      if (!openMobileNavbar) {
        return (
          <div className='experience'>
            <div className='navbar_pulldown' onClick={() => {toggleMobileNavbar()}}>
              <div className='navbar_pulldown_bar'/>
              <div className='navbar_pulldown_bar'/>
              <div className='navbar_pulldown_bar'/>
            </div>
            <section className={ darkTheme ? 'experience_container dark' : 'experience_container'}>
              <div className='experience_header'>Skills & Experience</div>
              <div className='experience_body'>
                <div className='experience_work'>
                  <div className={ darkTheme ? 'experience_entry dark' : 'experience_entry'}>
                    <h3 className={ darkTheme ? 'experience_entry role dark' : 'experience_entry role'}>Fullstack Engineer</h3>
                    <h3 className={ !darkTheme ? 'experience_entry company' : 'experience_entry company dark'}>Freelance</h3>
                    <p className={ !darkTheme ? 'experience_entry timeline' : 'experience_entry timeline dark'}>August 2022 - present</p>
                    <p className={ !darkTheme ? 'experience_entry summary' : 'experience_entry summary dark'}>
                      I independently engage in software development lifecycle practices to ensure timely completion of deliverables for clientele.
                      Among my practices are drawing low and high fidelity wireframes, implementation of testing libraries for CI and CD in order to
                      avoid backtracking and deployment of products using web services such as AWS and godaddy.
                    </p>
                  </div>
                  <div className={ darkTheme ? 'experience_entry dark' : 'experience_entry'}>
                    <h3 className={ darkTheme ? 'experience_entry role dark' : 'experience_entry role'}>Engineering Student</h3>
                    <h3 className={ !darkTheme ? 'experience_entry company' : 'experience_entry company dark'}>Hack Reactor</h3>
                    <p className={ !darkTheme ? 'experience_entry timeline' : 'experience_entry timeline dark'}>Novemeber 2021 - Ausgust 2022</p>
                    <p className={ !darkTheme ? 'experience_entry summary' : 'experience_entry summary dark'}>
                    Completed software engineering immersive program which comprised of over 1000 hours of both letcure and lab courses. Among the course content was: data structures, RESTful api development, HTML, CSS, Javascipt, SQL & noSQL databses and languages, cyber security, testing, deployment and more. We also engaged in workshops where the cohort was divided into teams of engineers for a mock work assignment where each team was given a business reirement document.
                    </p>
                  </div>
                </div>
                <div className='skills_graph'>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>Front-end</h3>
                  <FrontEndSVG/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter front-end' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>Back-end</h3>
                  <BackEndSVG/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter back-end' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>ReactJS</h3>
                  <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313722/icons/icons8-react-native_muuptm.svg'/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter react' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>NodeJS</h3>
                  <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313787/icons/icons8-node-js_atum9p.svg'/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter node' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>PostgreSQL</h3>
                  <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313754/icons/icons8-postgresql_sjrwkg.svg'/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter postgres' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
            </div>
                </div>
            </section>
          </div>
        );
      } else {
        return (
          <div className='experience'>
            <MobileNavbar toggleMobileNavbar={toggleMobileNavbar} />
            <section className={ darkTheme ? 'experience_container dark' : 'experience_container'}>
              <div className='experience_header'>Skills & Experience</div>
              <div className='experience_body'>
                <div className='experience_work'>
                  <div className={ darkTheme ? 'experience_entry dark' : 'experience_entry'}>
                    <h3 className={ darkTheme ? 'experience_entry role dark' : 'experience_entry role'}>Fullstack Engineer</h3>
                    <h3 className={ !darkTheme ? 'experience_entry company' : 'experience_entry company dark'}>Freelance</h3>
                    <p className={ !darkTheme ? 'experience_entry timeline' : 'experience_entry timeline dark'}>August 2022 - present</p>
                    <p className={ !darkTheme ? 'experience_entry summary' : 'experience_entry summary dark'}>
                      I independently engage in software development lifecycle practices to ensure timely completion of deliverables for clientele.
                      Among my practices are drawing low and high fidelity wireframes, implementation of testing libraries for CI and CD in order to
                      avoid backtracking and deployment of products using web services such as AWS and godaddy.
                    </p>
                  </div>
                  <div className={ darkTheme ? 'experience_entry dark' : 'experience_entry'}>
                    <h3 className={ darkTheme ? 'experience_entry role dark' : 'experience_entry role'}>Engineering Student</h3>
                    <h3 className={ !darkTheme ? 'experience_entry company' : 'experience_entry company dark'}>Hack Reactor</h3>
                    <p className={ !darkTheme ? 'experience_entry timeline' : 'experience_entry timeline dark'}>Novemeber 2021 - Ausgust 2022</p>
                    <p className={ !darkTheme ? 'experience_entry summary' : 'experience_entry summary dark'}>
                    Completed software engineering immersive program which comprised of over 1000 hours of both letcure and lab courses. Among the course content was: data structures, RESTful api development, HTML, CSS, Javascipt, SQL & noSQL databses and languages, cyber security, testing, deployment and more. We also engaged in workshops where the cohort was divided into teams of engineers for a mock work assignment where each team was given a business reirement document.
                    </p>
                  </div>
                </div>
                <div className='skills_graph'>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>Front-end</h3>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter front-end' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>Back-end</h3>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter back-end' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>ReactJS</h3>
                  <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313722/icons/icons8-react-native_muuptm.svg'/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter react' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>NodeJS</h3>
                  <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313787/icons/icons8-node-js_atum9p.svg'/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter node' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>PostgreSQL</h3>
                  <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313754/icons/icons8-postgresql_sjrwkg.svg'/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter postgres' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
            </div>
                </div>
            </section>
          </div>
        );
      }
    }

  return (
    <div className='experience'>
      <NavBar/>
      <section className={ darkTheme ? 'experience_container dark' : 'experience_container'}>
        <div className='experience_header'>Skills & Experience</div>
        <div className='experience_body'>
          <div className='experience_work'>
            <div className={ darkTheme ? 'experience_entry dark' : 'experience_entry'}>
              <h3 className={ darkTheme ? 'experience_entry role dark' : 'experience_entry role'}>Fullstack Engineer</h3>
              <h3 className={ !darkTheme ? 'experience_entry company' : 'experience_entry company dark'}>Freelance</h3>
              <p className={ !darkTheme ? 'experience_entry timeline' : 'experience_entry timeline dark'}>August 2022 - present</p>
              <p className={ !darkTheme ? 'experience_entry summary' : 'experience_entry summary dark'}>
                I independently engage in software development lifecycle practices to ensure timely completion of deliverables for clientele.
                Among my practices are drawing low and high fidelity wireframes, implementation of testing libraries for CI and CD in order to
                avoid backtracking and deployment of products using web services such as AWS and godaddy.
              </p>
            </div>
            <div className={ darkTheme ? 'experience_entry dark' : 'experience_entry'}>
              <h3 className={ darkTheme ? 'experience_entry role dark' : 'experience_entry role'}>Engineering Student</h3>
              <h3 className={ !darkTheme ? 'experience_entry company' : 'experience_entry company dark'}>Hack Reactor</h3>
              <p className={ !darkTheme ? 'experience_entry timeline' : 'experience_entry timeline dark'}>Novemeber 2021 - Ausgust 2022</p>
              <p className={ !darkTheme ? 'experience_entry summary' : 'experience_entry summary dark'}>
              Completed software engineering immersive program which comprised of over 1000 hours of both letcure and lab courses. Among the course content was: data structures, RESTful api development, HTML, CSS, Javascipt, SQL & noSQL databses and languages, cyber security, testing, deployment and more. We also engaged in workshops where the cohort was divided into teams of engineers for a mock work assignment where each team was given a business reirement document.
              </p>
            </div>
          </div>
            <div className='skills_graph'>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>Front-end</h3>
                  <FrontEndSVG/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter front-end' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>Back-end</h3>
                  <BackEndSVG/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter back-end' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>ReactJS</h3>
                  <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313722/icons/icons8-react-native_muuptm.svg'/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter react' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>NodeJS</h3>
                  <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313787/icons/icons8-node-js_atum9p.svg'/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter node' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
              <div className='skills_graph entry'>
                <div className='skills_graph entry header'>
                  <h3>PostgreSQL</h3>
                  <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1667313754/icons/icons8-postgresql_sjrwkg.svg'/>
                </div>
                <div className='skills_graph entry_meter container'>
                  <div className='skills_graph entry_meter postgres' style={{zIndex: openMobileNavbar && 0}}/>
                  <div className='skills_graph entry_meter background'/>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default Experience;