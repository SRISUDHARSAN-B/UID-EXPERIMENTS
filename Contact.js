import React from 'react';

const sectionStyle = {
  padding: '50px 0',
  textAlign: 'center',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  maxWidth: '400px',
  margin: '0 auto',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ddd',
};

const buttonStyle = {
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#4caf50',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

const Contact = () => {
  return (
    <section id="contact" style={sectionStyle}>
      <div>
      <br></br>
        <h2>Contact Me</h2>
        <form id="contact-form" style={formStyle}>
          <input type="text" id="name" name="name" placeholder="Name" required style={inputStyle} />
          <input type="email" id="email" name="email" placeholder="Email" required style={inputStyle} />
          <textarea id="message" name="message" placeholder="Message" required style={inputStyle}></textarea>
          <button type="submit" style={buttonStyle}>Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
