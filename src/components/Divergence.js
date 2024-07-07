// src/components/Divergence.js
import React, { useState } from 'react';
import './Divergence.css';
import Toggle from './Toggle';

const plans = [
  { name: 'Basic', monthly: '$10/month', annual: '$100/year' },
  { name: 'Pro', monthly: '$20/month', annual: '$200/year' },
  { name: 'Premium', monthly: '$30/month', annual: '$300/year' },
];

const options = ['Option 1', 'Option 2', 'Option 3'];

const Divergence = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [activePlan, setActivePlan] = useState(null);

  const handleToggleOptions = (planName) => {
    setActivePlan(activePlan === planName ? null : planName);
  };

  return (
    <section id="divergence" className="divergence">
      <h2>Our Plans</h2>
      <Toggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      <div className="pricing-cards">
        {plans.map((plan) => (
          <div className="plan-card" key={plan.name}>
            <h3>{plan.name} Plan</h3>
            <p>{isAnnual ? plan.annual : plan.monthly}</p>
            <button onClick={() => handleToggleOptions(plan.name)}>Select</button>
            {activePlan === plan.name && (
              <div className="dropdown-options">
                {options.map((option, index) => (
                  <div key={index}>
                    <a href={`#${option.toLowerCase().replace(' ', '-')}`}>{option}</a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Divergence;