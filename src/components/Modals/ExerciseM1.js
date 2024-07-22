import React from 'react';
import './Absorb.css';
import image from '../../images/ExerciseM1.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>Beat Saber</h2>
      <p>Rythmically get that move on</p>
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