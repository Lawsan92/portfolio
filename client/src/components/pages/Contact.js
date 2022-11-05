import React, { useState } from 'react';
import contacts from '../../data/contacts.js';
import Email from './Email.js';

const Contact = ({ contactRef }) => {
  const [emailModal, isOpen] = useState(false);

  const renderContact = () => {
    return contacts.map((contact) => {
      return(
        <div>
        {contact.name === 'email' ?
        <img src={contact.url} onClick={() =>{isOpen(true)}}/>
          :
        <a href={contact.href}>
          <img src={contact.url}/>
        </a>
        }
        </div>
      )
    })
  }

  return (
    <section id='contact' ref={contactRef}>
      <h1>{'Contact'}</h1>
      <div id='contact-icons'>
        {renderContact()}
        {emailModal && <Email isOpen={isOpen}/>}
      </div>
    </section>
  )
}

export default Contact;