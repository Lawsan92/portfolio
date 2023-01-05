import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Email = ({ isOpen }) => {

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

  return (
    <section id='email-modal-background'>
      <form ref={form} onSubmit={sendEmail} id='email-modal-body'>
        <div id='email-modal-header'>
          <div id='email-modal-close'>
            <button onClick={() => {isOpen(false)}}>X</button>
          </div>
          <h2>Contact Me</h2>
        </div>
        <input type='text' name='user_name' placeholder='Full Name'></input>
        <input type='email' name='user_email' placeholder='Email'></input>
        <input type='text' name='subject' placeholder='Subject'></input>
        <textarea name='message'></textarea>
        <div id='email-modal-send'>
        <input type='submit' value ='Send'></input>
        </div>
      </form>
    </section>
  );
};

export default Email;

