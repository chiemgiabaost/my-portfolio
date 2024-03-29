import React, { useRef } from 'react';
import "./contact.css";
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs.sendForm('service_j1w0ry9', 'template_n1o3ttq', form.current, '9DAokDblWwxA8hjcv')
      .then((result) => {
        console.log(result.text);
        console.log(e.target.value);
      }, (error) => {
        console.log(error.text);
      });
     form.current.reset();
  };

  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <EmailIcon className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>chiemgiabaost@gmail.com</h5>
            <a href='mailto:chiemgiabaost@gmail.com' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <MessageIcon className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Gia Bao</h5>
            <a href='https://m.me/giabao.chiem.7' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <WhatsAppIcon className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>123456789</h5>
            <a href='https://wa.me/123456789' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' onClick={sendEmail}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
