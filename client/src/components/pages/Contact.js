import React, { useState, useRef } from 'react';
import NavBar from './NavBar.js';
import { useTheme } from '../ThemeContext.js';
import Email from './Email.js';

const Contact = () => {

  console.log(process.env.EMAIL_JS_SERVICE_ID, process.env.EMAIL_JS_TEMPLATE_ID,  process.env.EMAIL_JS_PUBLIC_KEY);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.EMAIL_JS_SERVICE_ID, process.env.EMAIL_JS_TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
      .then((result) => {
        console.log('result:', result.text);
      })
      .catch((err) => {
        console.log('err:', err.text);
      });

      e.target.reset();
  };

  const darkTheme = useTheme();

  return (
    <div className={ !darkTheme ? 'contact_container' : 'contact_container dark' }>
      <NavBar/>
      <div className='contact_content'>
        <section id='contact_email background'>
        <form ref={form} onSubmit={sendEmail} id='contact_email body'>
          <div id='contact_email header'>
            <div id='contact_email close'>
              <button onClick={() => {isOpen(false)}}>X</button>
            </div>
            <h2>Contact Me</h2>
          </div>
          <input type='text' name='user_name' placeholder='Full Name'></input>
          <input type='email' name='user_email' placeholder='Email'></input>
          <input type='text' name='subject' placeholder='Subject'></input>
          <textarea name='message'></textarea>
          <div id='contact_email send'>
          <input type='submit' value ='Send'></input>
          </div>
        </form>
      </section>
      </div>
    </div>
  )
}

export default Contact;