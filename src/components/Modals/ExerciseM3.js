import React from 'react';
import './Absorb.css';
import image from '../../images/ExerciseM3.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>Wii Fit</h2>
      <p>The all time classic</p>
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