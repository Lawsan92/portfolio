import React, { useState } from 'react';
import contacts from '../../data/contacts.js';

const Contact = ({ contactRef, emailModal, isOpen }) => {

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
      <div id='border'/>
      <h1>{'Contact'}</h1>
      <div id='contact-icons'>
        {renderContact()}
      </div>
    </section>
  )
}

export default Contact;