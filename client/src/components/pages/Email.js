import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Email = ({ isOpen }) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qy43j0i', 'template_xb4upxz', form.current, 'eo3RnBaxVa4viVTnr')
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
        <input type='text' placeholder='Full Name'></input>
        <input type='text' placeholder='Email'></input>
        <input type='text' placeholder='Subject'></input>
        <textarea></textarea>
        <div id='email-modal-send'>
        <input type='submit' value ='Send'></input>
        </div>
      </form>
    </section>
  );
};

export default Email;

