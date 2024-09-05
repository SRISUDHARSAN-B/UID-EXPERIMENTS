import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-container container mt-5">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us using the contact information below.</p>
      
      <div className="row">
        <div className="col-md-6">
          <h3>Address</h3>
          <p>
            Shop no 3 & 4 Ground Floor, MSG complex (“Commercial Complex”),<br />
            (Opp to Mayil Mark bakery), College Road, Chathram Bus Stand,<br />
            Trichy – 620002.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Phone</h3>
          <p>+91  7305085121</p>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6">
          <h3>Email</h3>
          <p>redmi@gmail.com</p>
        </div>
        <div className="col-md-6">
          <h3>Website</h3>
          <p>www.redmi.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
