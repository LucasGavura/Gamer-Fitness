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
          <p> Seeing too much subway surfers recently?
            Well, now you can play it in VR! 
            This game is a great way to get your heart rate up and get a good workout in.
            With lots of jumping required for maximum results.
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