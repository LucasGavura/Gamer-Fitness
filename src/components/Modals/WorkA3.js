import React from 'react';
import './Absorb.css';
import image from '../../images/WorkA3.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>Coming Soon!</h2>
      <p>Whoops, looks like this section is going to be added to the website in the near future</p>
      <div className="info-content">
        <div className="text-content">
          <p> Stay tuned!

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
