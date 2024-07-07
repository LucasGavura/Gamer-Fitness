// src/components/Toggle.js
import React from 'react';
import './Toggle.css';

const Toggle = ({ isAnnual, setIsAnnual }) => {
  return (
    <div className="toggle-switch">
      <label>
        <input
          type="checkbox"
          checked={isAnnual}
          onChange={() => setIsAnnual(!isAnnual)}
        />
        <span className="slider"></span>
        {isAnnual ? 'Annual Plans' : 'Monthly Plans'}
      </label>
    </div>
  );
};

export default Toggle;