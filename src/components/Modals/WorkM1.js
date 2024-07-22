import React from 'react';
import './Absorb.css';
import image from '../../images/WorkM1.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>Save the Cats!</h2>
      <p>A intense weightlifting game with ur feline friends</p>
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
