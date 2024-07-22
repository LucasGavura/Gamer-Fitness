import React from 'react';
import './Absorb.css';
import image from '../../images/DietA2.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>Health Benefits</h2>
      <p>Why eating healthy is life changing</p>
      <div className="info-content">
        <div className="text-content">
          <p>Being healthy offers numerous benefits that enhance overall well-being and quality of life.
             Physical health benefits include increased energy levels, improved cardiovascular function,
              and better immune system resilience, reducing the risk of chronic diseases such as heart 
              disease and diabetes. Mental health benefits include reduced stress levels, improved mood, 
              and enhanced cognitive function, promoting better focus and productivity. Additionally, 
              maintaining a healthy lifestyle supports better sleep quality, faster recovery from illness or injury,
               and a longer lifespan. Overall, being healthy enables individuals to enjoy a more active,
                fulfilling life with greater vitality and resilience to everyday challenges.
          </p>
        </div>
        <div className="image-content">
          <img src={image} alt="diet" />
        </div>
      </div>
    </section>
  );
};

export default Absorb;
