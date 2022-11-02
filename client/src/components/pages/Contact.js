import React from 'react';
import contacts from '../../data/contacts.js';

const Contact = ({ contactRef }) => {

  const renderContact = () => {
    return contacts.map((contact) => {
      return(
        <a href={contact.href}>
          <img src={contact.url}/>
        </a>
      )
    })
  }

  return (
    <section id='contact' ref={contactRef}>
      <h1>Contact</h1>
      <div id='contact-icons'>
        {renderContact()}
      </div>
    </section>
  )
}

export default Contact;