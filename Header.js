import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1><center>Redmi's Website</center></h1>
      <nav>
        <a href="#home-page">Home</a>
        <a href="#aboutpage">About</a>
        <a href="#products">Products</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

