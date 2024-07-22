import React from 'react';
import './Absorb.css';
import image from '../../images/ExerciseM2.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>Just Dance</h2>
      <p>Get that move on!</p>
      <div className="info-content">
        <div className="text-content">
          <p>

          </p>
        </div>
        <div className="image-content">
          <img src={image} alt="exercise" />
        </div>
      </div>
    </section>
  );
};

export default Absorb;