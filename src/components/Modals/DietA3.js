import React from 'react';
import './Absorb.css';
import image from '../../images/DietA3.png';

const Absorb = () => {
  return (
    <section id="absorb" className="title">
      <h2>Delicious Recipes with results</h2>
      <p>A healthy delcious pizza recipe</p>
      <div className="info-content">
        <div className="text-content">
          <p>This Cauliflower Crust Pizza offers a nutritious twist on a beloved classic.
             To start, grate a medium head of cauliflower into fine crumbs, then microwave 
             and squeeze out excess moisture. Mix the cauliflower with an egg, shredded mozzarella cheese,
              and flavorful seasonings like oregano, basil, garlic powder, salt, and pepper.
              Shape this mixture into a crust on a baking sheet lined with parchment paper and bake until golden brown. 
              Once the crust is ready, spread it with tomato or pizza sauce and top it with part-skim mozzarella cheese 
              and an array of fresh vegetables like bell peppers, cherry tomatoes, and spinach. For added protein, 
              consider options like grilled chicken or tofu. Bake again until the cheese melts and the toppings are heated through.
               Garnish with fresh basil leaves before serving. This wholesome pizza is not only delicious but also packed with fiber,
                vitamins, and lower carbohydrates, making it a satisfying and healthier alternative to traditional pizza recipes.
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
