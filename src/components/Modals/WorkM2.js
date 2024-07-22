import React from 'react';
import './Absorb.css';
import image from '../../images/WorkM2.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>Team Spirit</h2>
      <p>Team based competition against other liked minded individuals</p>
      <div className="info-content">
        <div className="text-content">
          <p>
            Same as the fitness Olympics but on a much smaller scale and with no competeting.
            This is great for those who don't like the competitive aspects of the fitness Olympics
             but still wish to participate in similar activites.

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
