// src/components/Divergence.js
import React, { useState } from 'react';
import './Divergence.css';
import Toggle from './Toggle';

const Divergence = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [moreOptions, setMoreOptions] = useState([]);

  const handleShowOptions = (planType) => {
    setMoreOptions([...moreOptions, planType]);
  };

  return (
    <section id="divergence" className="divergence">
      <h2>Our Plans</h2>
      <Toggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      <div className={`pricing-cards ${isAnnual ? 'annual' : 'monthly'}`}>
        <div className="plan-card">
          <h3>Workout Plans</h3>
          <p>{isAnnual ? '$200/year' : '$20/month'}</p>
          <button onClick={() => handleShowOptions('Workout Plans')}>Select</button>
        </div>
        <div className="plan-card">
          <h3>Exercise Plans</h3>
          <p>{isAnnual ? '$150/year' : '$15/month'}</p>
          <button onClick={() => handleShowOptions('Exercise Plans')}>Select</button>
        </div>
        <div className="plan-card">
          <h3>Dieting Plans</h3>
          <p>{isAnnual ? '$100/year' : '$10/month'}</p>
          <button onClick={() => handleShowOptions('Dieting Plans')}>Select</button>
        </div>
      </div>
      <div className="more-options">
        {moreOptions.map((option, index) => (
          <div key={index} className="option-template">
            <h4>More options for {option}</h4>
            <p>Option 1</p>
            <p>Option 2</p>
            <p>Option 3</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Divergence;