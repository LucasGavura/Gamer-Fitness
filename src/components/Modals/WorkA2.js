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
          <p> Compete is a fitness challenge with other users, competeting in a friendly manner to push eachother
             further to become the best version of themselves. This is a year long challenge, with monthly check-ins 
             and is a favorite among our users.

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
