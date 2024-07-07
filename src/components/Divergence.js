// src/components/Divergence.js
import React, { useState } from 'react';
import './Divergence.css';
import Toggle from './Toggle';

const Divergence = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [activePlan, setActivePlan] = useState(null);
  const [activeOption, setActiveOption] = useState(null);

  const handleShowOptions = (planType) => {
    if (activePlan === planType) {
      setActivePlan(null);
    } else {
      setActivePlan(planType);
      setActiveOption(null);
    }
  };

  const handleOptionClick = (optionIndex) => {
    if (activeOption === optionIndex) {
      setActiveOption(null);
    } else {
      setActiveOption(optionIndex);
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
                  <p onClick={() => handleOptionClick(index)}>Option {option + 1}</p>
                  {activeOption === index && (
                    <div>
                      <p>Details about Option {option + 1}</p>
                      <button>Select Option {option + 1}</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="plan-card">
          <h3>Exercise Plans</h3>
          <p>{isAnnual ? '$150/year' : '$15/month'}</p>
          <button onClick={() => handleShowOptions('Exercise Plans')}>Select</button>
          {activePlan === 'Exercise Plans' && (
            <div className="option-template">
              {[0, 1, 2].map((option, index) => (
                <div key={index}>
                  <p onClick={() => handleOptionClick(index)}>Option {option + 1}</p>
                  {activeOption === index && (
                    <div>
                      <p>Details about Option {option + 1}</p>
                      <button>Select Option {option + 1}</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="plan-card">
          <h3>Dieting Plans</h3>
          <p>{isAnnual ? '$100/year' : '$10/month'}</p>
          <button onClick={() => handleShowOptions('Dieting Plans')}>Select</button>
          {activePlan === 'Dieting Plans' && (
            <div className="option-template">
              {[0, 1, 2].map((option, index) => (
                <div key={index}>
                  <p onClick={() => handleOptionClick(index)}>Option {option + 1}</p>
                  {activeOption === index && (
                    <div>
                      <p>Details about Option {option + 1}</p>
                      <button>Select Option {option + 1}</button>
                    </div>
                  )}
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