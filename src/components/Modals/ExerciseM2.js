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
          <p> Just dance needs no introduction. It is a fun way to get your body moving and your heart pumping.
             It is a great way to get your daily exercise in without feeling like you are working out.
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