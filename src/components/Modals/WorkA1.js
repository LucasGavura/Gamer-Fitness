import React from 'react';
import './Absorb.css';
import image from '../../images/WorkA1.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>Getting Over it</h2>
      <p>The Core workout of a lifetime</p>
      <div className="info-content">
        <div className="text-content">
          <p> While it may be a frustrating game, it is a great workout for your core.
            This game will have you climbing up a mountain with a hammer, and it will have you working up a sweat in no time.
            As only your arms will be used to climb, it will be a great workout for your core.

          </p>
        </div>
        <div className="image-content">
          <img src={image} alt="workout" />
        </div>
      </div>
    </section>
  );
};

export default Absorb;
