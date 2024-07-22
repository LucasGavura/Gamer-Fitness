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
          <p> We've all played this one before. The Wii Fit is a classic game that has been around for years. 
            The game has a variety of different exercises that you can do, from yoga to strength training. 
            It's a great way to get moving and have fun at the same time with any sports imaginable.

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