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
          <p>Need move motivation to hit that PR? well now you can with this game!
            You will be saving kittens from burning buildings by lifting heavy objects among other things.
            Hightly recommended for those who need that extra push to hit that PR.
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
