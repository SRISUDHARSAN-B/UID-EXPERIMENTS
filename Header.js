import React from 'react';

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 0',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1000, // Ensures it stays on top
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '15px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

const Header = ({ siteTitle }) => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <h1>{siteTitle}</h1>
        <ul style={ulStyle}>
          <li><a style={linkStyle} href="#home">Home</a></li>
          <li><a style={linkStyle} href="#skills">Skills</a></li>
          <li><a style={linkStyle} href="#projects">Projects</a></li>
          <li><a style={linkStyle} href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
