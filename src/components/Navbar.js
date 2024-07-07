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
      <h1>My Fitness App</h1>
      <button onClick={scrollToDivergence} className="divergence-button">Go to Plans</button>
    </nav>
  );
};

export default Navbar;