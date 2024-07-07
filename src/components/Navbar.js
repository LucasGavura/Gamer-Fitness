// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToDivergence = () => {
    const element = document.getElementById('divergence');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Gamer Fitness</div>
      <ul className="navbar-links">
        <li><a href="#divergence">Plans</a></li>
        <li><a href="#absorb">Dieting</a></li>
        <li><a href="#about">About Us</a></li>
        <button onClick={scrollToDivergence} className="divergence-button">Go to Plans</button>
      </ul>
    </nav>
  );
};

export default Navbar;