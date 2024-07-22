import React from 'react';
import './Absorb.css';
import image from '../../images/DietM1.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>Losing Weight in a Month</h2>
      <p>How you can get results as soon as possible</p>
      <div className="info-content">
        <div className="text-content">
          <p>
            Losing weight in a month requires a combination of dietary changes and increased physical activity. 
            To start, focus on creating a calorie deficit by reducing your daily caloric intake and increasing your 
            energy expenditure through exercise. Aim to consume a balanced diet rich in whole foods like fruits, vegetables, 
            lean proteins, and whole grains while limiting processed foods, sugary beverages, and high-fat snacks. 
            Incorporate regular cardio and strength training exercises into your routine to boost metabolism, burn calories, 
            and build lean muscle mass. To stay motivated and track your progress, consider setting specific, achievable goals 
            and monitoring your food intake and physical activity. Remember that weight loss results may vary depending on individual.
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
