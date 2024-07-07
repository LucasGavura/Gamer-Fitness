// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick = () => {
    scrollToSection('divergence');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Gamer Fitness</div>
      <ul className="navbar-links">
        <li><a href="#divergence">Plans</a></li>
        <li><a href="#absorb">Dieting</a></li>
        <li><a href="#about">About Us</a></li>
        <li><button className="navbar-button" onClick={handleButtonClick}>Get started</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;