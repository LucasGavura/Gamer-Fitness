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
          <p>Walking around playing pokemon go will do wonders in the long run for your health. 
            It is a fun way to get your exercise in and you can even do it with friends.
            All while catching pokemon and getting to know your city better.
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
