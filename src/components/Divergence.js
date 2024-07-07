// src/components/Divergence.js
import React, { useState } from 'react';
import './Divergence.css';
import Toggle from './Toggle';

const Divergence = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [activePlan, setActivePlan] = useState(null);

  const handleShowOptions = (planType) => {
    if (activePlan === planType) {
      setActivePlan(null);
    } else {
      setActivePlan(planType);
    }
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
          {activePlan === 'Workout Plans' && (
            <div className="option-template">
              {[0, 1, 2].map((option, index) => (
                <div key={index}>
                  <p>Option {option + 1}</p>
                  <button>Select Option {option + 1}</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Divergence;