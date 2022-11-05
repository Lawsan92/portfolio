import React from 'react';

const Email = ({ isOpen }) => {
  return (
    <div id='email-modal-background'>
      <div id='email-modal-body'>
        <section id='email' style={{justifyContent:'center'}}>
          <form style={{display: 'flex', flexDirection: 'column', border: 'solid 3px'}}>
            <button onClick={() => {isOpen(false)}}>X</button>
            <input type='text' placeholder='Full Name'></input>
            <input type='text' placeholder='Email'></input>
            <input type='text' placeholder='Subject'></input>
            <textarea></textarea>
          </form>
        </section>
        </div>
    </div>
  );
};

export default Email;