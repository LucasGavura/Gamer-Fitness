import React, { useState } from 'react';
import './Divergence.css';
import Toggle from './Toggle';

const plans = [
  { name: 'Workout', monthly: 'See fun activities to implement into your workouts', annual: 'See fun activities to implement into your workouts' },
  { name: 'Exercise', monthly: 'See some games that can help do essential exercises', annual: 'See some games that can help do essential exercises' },
  { name: 'Dieting', monthly: 'See what delicious meals you can make, while remaining healthy and fit', annual: 'See what delicious meals you can make, while remaining healthy and fit' },
];

const options = ['More divergence options here', 'More divergence options here', 'More divergence options here'];

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