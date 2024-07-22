import React from 'react';
import './Absorb.css';
import image from '../../images/DietM3.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>Vegan Dieting</h2>
      <p>How to stay in shape on a purely vegan diet</p>
      <div className="info-content">
        <div className="text-content">
          <p>
            A vegan diet involves consuming only plant-based foods and excludes all animal products, including meat, dairy, eggs, and honey. 
            While it may seem challenging to maintain a balanced diet without these traditional sources of protein and nutrients, 
            a well-planned vegan diet can provide all the essential nutrients needed for optimal health. Key components of a healthy vegan diet 
            include fruits, vegetables, whole grains, legumes, nuts, and seeds, which offer a wide range of vitamins, minerals, fiber, and antioxidants. 
            To ensure adequate protein intake, vegans can incorporate plant-based protein sources such as tofu, tempeh, lentils, chickpeas, and quinoa 
            into their meals. It is also essential to include sources of vitamin B12, omega-3 fatty acids, and iron, which are typically found in animal products. 
            Vegan diets have been associated with numerous health benefits, including reduced risk of chronic diseases like heart disease, diabetes, and certain cancers. 
            They are also environmentally friendly and promote animal welfare. With careful planning and attention to nutrient intake, a vegan diet can support overall health 
            and well-being while aligning with ethical and environmental values.
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
