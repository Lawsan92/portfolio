import React from 'react';

const Email = ({ isOpen }) => {
  return (
    <section id='email-modal-background'>
      <form id='email-modal-body'>
        <div id='email-modal-close'>
          <button onClick={() => {isOpen(false)}}>X</button>
        </div>
        <input type='text' placeholder='Full Name'></input>
        <input type='text' placeholder='Email'></input>
        <input type='text' placeholder='Subject'></input>
        <textarea></textarea>
        <div id='email-modal-send'>
          <button onClick={() => {}}>Send</button>
        </div>
      </form>
    </section>
  );
};

export default Email;