import React from 'react';

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '20px 0',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <p>&copy; 2024 My Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
