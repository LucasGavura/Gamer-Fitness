// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Gamer Fitness</div>
      <ul className="navbar-links">
        <li><a href="#divergence">Plans</a></li>
        <li><a href="#absorb">Dieting</a></li>
        <li><a href="#about">About Us</a></li>
        <li><button className="navbar-button">Get started</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;