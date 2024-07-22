import React from 'react';
import './Absorb.css';
import image from '../../images/ExerciseA2.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>Dinosaur Run</h2>
      <p>Who would've thought running for your life was this benficial</p>
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