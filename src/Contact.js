import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contactstyles.css';
import 'animate.css';


function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_re1mnet', 'template_t23nrdp', form.current, 'yfsFpK783Zqjg6VgY')
      .then(() => {
        alert("Message successfully sent!")
        window.location.reload(false)
      },
      () => {alert('Failed to send the message, please try again.')}
  )};

  return (
  <form ref={form} onSubmit={sendEmail}>

<div className="container">
		<div className="contact-box animate__animated animate__fadeInLeft">
			<div className="left animate__animated animate__fadeInLeft">
        <h2>Contact</h2>
      <input name="user_name" type="text" className="field" placeholder="Your Name" />
      <input name="user_email" type="text" className="field" placeholder="Your Email" />
      <input name="phone_number" type="text" className="field" placeholder="Phone" />
      <textarea name="message" placeholder="Message" className="field"></textarea>

      <button className="btn">Send</button></div>

		</div>
	</div>

    </form>
    );

    };
    export default Contact;