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
        <li><a href="#divergence">Our Plans</a></li>
        <li><a href="#absorb">Track Workouts</a></li>
        <li><a href="#about">About</a></li>
        <li><button onClick={scrollToDivergence} className="divergence-button">Get Started</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;