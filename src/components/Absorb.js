// src/components/Absorb.js
import React from 'react';
import './Absorb.css';
import absorbImage from '../images/Absorb.png';

const Absorb = () => {
  return (
    <section id="absorb" className="absorb">
      <h2>How to Lift</h2>
      <p>Getting started on your lifting journey...</p>
      <div className="absorb-content">
        <p>Lorem ipsum...</p>
        <img src={absorbImage} alt="Lifting" />
      </div>
    </section>
  );
};

export default Absorb;