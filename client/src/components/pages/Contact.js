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
        <div className='contact_content header'>
        <h1>Contact Me</h1>
        </div>
        <section className='contact_email background'>
        <form ref={form} onSubmit={sendEmail} className='contact_email body'>
          <div className='contact_email header'>
            <div className='contact_email close'>
            </div>
          </div>
          <div className='contact_email section1'>
            <input className={ !darkTheme ? 'contact_email body input' : 'contact_email body input dark'} type='text' name='user_name' placeholder='Full Name'></input>
            <input className={ !darkTheme ? 'contact_email body input' : 'contact_email body input dark'} type='email' name='user_email' placeholder='Email'></input>
          </div>
          <input className={ !darkTheme ? 'contact_email body input' : 'contact_email body input dark'} type='text' name='subject' placeholder='Subject'></input>
          <textarea className={ !darkTheme ? 'contact_email body input textarea' : 'contact_email body input textarea dark'} name='message'></textarea>
          <input className={ !darkTheme ? 'contact_email body btn' : 'contact_email body btn dark'} type='submit' value ='Send'></input>
        </form>
      </section>
      </div>
    </div>
  )
}

export default Contact;