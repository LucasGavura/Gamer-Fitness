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
          <p>

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
