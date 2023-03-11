import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './index.css';

export const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('contact_service', 'contact_form', form.current, 'cNVt72OXsaVUFQJ82')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setFormBody('Your message has been succesfully sent!');
  };
  const bodyForm = 
  <form className="formulario" ref={form} onSubmit={sendEmail}>
  <label>Name</label>
  <input type="text" name="user_name" className='i' required/>
  <label>Email</label>
  <input type="email" name="user_email" className='i' required/>
  <label>Message</label>
  <textarea name="message" required/>
  <input type="submit" value="Send" className='i submission' required/>
</form>;
  const [formBody, setFormBody] = useState(bodyForm);

  return (
    <div>{formBody}</div>
  );
};