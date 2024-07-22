import React from 'react';
import './Absorb.css';
import image from '../../images/ExerciseA3.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>Subway Surfers VR</h2>
      <p>Run and Jump in this game to get the cardio of your life</p>
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