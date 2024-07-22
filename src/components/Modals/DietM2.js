import React from 'react';
import './Absorb.css';
import omage from '../../images/DietM2.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>Green Importance</h2>
      <p>How greens are vital to our health</p>
      <div className="info-content">
        <div className="text-content">
          <p> Greens are crucial for maintaining optimal health due to their rich nutrient content and numerous benefits.
             Leafy greens such as spinach, kale, and Swiss chard are packed with vitamins A, C, and K, along with essential
              minerals like iron and calcium. These nutrients support various bodily functions, including immune system strength,
               bone health, and vision. Greens are also high in fiber, aiding digestion and promoting a feeling of fullness,
                which can help in weight management. Moreover, they are low in calories and carbohydrates, making them ideal
                 for those looking to maintain a balanced diet. Regular consumption of greens has been linked to reduced risk
                  of chronic diseases such as heart disease, diabetes, and certain cancers. Adding a variety of leafy greens
                   to meals not only enhances flavor and texture but also contributes significantly to overall well-being and longevity.

          </p>
        </div>
        <div className="image-content">
          <img src={omage} alt="diet" />
        </div>
      </div>
    </section>
  );
};

export default Absorb;
