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
          <p>Beat Saber is a VR rhythm game where you slash the beats of adrenaline-pumping music as they fly towards you,
             surrounded by a futuristic world, your will be tired out in no time.
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