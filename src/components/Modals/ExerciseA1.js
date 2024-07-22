import React from 'react';
import './Absorb.css';
import image from '../../images/ExerciseA1.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>Pokemon GO</h2>
      <p>How catching pokemon can lead to long term benefits</p>
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
