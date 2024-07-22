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
          <p>Dinosaurs are scary, but running from them is a great way to get your cardio in. 
            This game is a great way to get your heart rate up and get a good workout in.
            Fear is a great motivator, and this game will have you running for your life in no time.
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