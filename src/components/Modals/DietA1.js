import React from 'react';
import './Absorb.css';
import image from '../../images/DietA1.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>Long Term Dieting</h2>
      <p>Getting started on your healthy journey</p>
      <div className="info-content">
        <div className="text-content">
          <p>Long-term dieting involves adopting sustainable eating habits that support overall health and wellness
             over an extended period. It goes beyond short-term restrictions or fad diets, focusing on balanced nutrition,
              portion control, and mindful eating. Successful long-term dieting emphasizes incorporating a variety of nutrient-dense
               foods such as fruits, vegetables, lean proteins, whole grains, and healthy fats into daily meals. It also encourages
                moderation with treats and indulgences, aiming for consistency rather than perfection. Long-term dieting promotes 
                gradual, sustainable weight management and supports long-lasting improvements in energy levels, digestion, mood, 
                and overall well-being. Combined with regular physical activity, it forms the foundation for a healthy lifestyle 
                that can be maintained for years to come.
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
