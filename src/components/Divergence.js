// src/components/Divergence.js
import React from 'react';
import './Divergence.css';

const Divergence = () => {
  return (
    <section id="divergence" className="divergence">
      <h2>Our Plans</h2>
      <div className="divergence-buttons">
        <button>Monthly plans</button>
        <button>Annual plans</button>
      </div>
      <div className="divergence-cards">
        <div className="plan-card">
          <h3>Workout Plans</h3>
          <ul>
            <li>Improve muscle strength</li>
            <li>Gain that 6 pack</li>
            <li>Fun games to make it fun</li>
            <li>Final feature</li>
          </ul>
          <button>Select</button>
        </div>
        <div className="plan-card">
          <h3>Exercise Plans</h3>
          <ul>
            <li>Healthy Body</li>
            <li>More features</li>
            <li>Even more features</li>
            <li>Final features here</li>
          </ul>
          <button>Select</button>
        </div>
        <div className="plan-card">
          <h3>Dieting Plans</h3>
          <ul>
            <li>Eat healthier</li>
            <li>More features</li>
            <li>Even more features</li>
            <li>Extra features</li>
          </ul>
          <button>Select</button>
        </div>
      </div>
    </section>
  );
};

export default Divergence;