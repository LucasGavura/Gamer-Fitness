// src/components/Monitored.js
import React from 'react';
import './Monitored.css';

const Monitored = () => {
  return (
    <section id="monitored" className="monitored">
      <h2>Workout Progress</h2>
      <div className="workout-form">
        <input type="text" placeholder="Type" />
        <input type="number" placeholder="Amount" />
        <input type="number" placeholder="Weight" />
        <input type="date" />
      </div>
      <div className="workout-data">
        <p>The inputted data will be displayed in each of these rows</p>
        <button>See Recommendations</button>
      </div>
    </section>
  );
};

export default Monitored;