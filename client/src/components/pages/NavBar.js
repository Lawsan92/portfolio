import React, { useRef } from 'react';

const NavBar = ({ contactRef }) => {

  return (
    <section id='navbar'>
      <div id='name'>
      <h1>Lawrence Sanzogni</h1>
      </div>
      <div id='nav-buttons'>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Skills</h3>
        <h3>Projects</h3>
        {/* <h3>Education</h3> */}
        <h3 onClick={() => {contactRef.current.scrollIntoView()}}>Contact Me</h3>
      </div>
    </section>
  )
}

export default NavBar;