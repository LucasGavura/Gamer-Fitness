import React from 'react';
import './Absorb.css';
import image from '../../images/WorkA2.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>The Fit Olympics</h2>
      <p>Team based competition on who can improve the most in a year</p>
      <div className="info-content">
        <div className="text-content">
          <p>

          </p>
        </div>
        <div className="image-content">
          <img src={image} alt="workout" />
        </div>
      </div>
    </section>
  );
};

export default Absorb;
