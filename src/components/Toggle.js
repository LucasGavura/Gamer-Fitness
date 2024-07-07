// src/components/Toggle.js
import React from 'react';
import './Toggle.css';

const Toggle = ({ isAnnual, setIsAnnual }) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id="toggle"
        checked={isAnnual}
        onChange={() => setIsAnnual(!isAnnual)}
      />
      <label htmlFor="toggle" className="toggle-label">
        <span className="toggle-inner" />
        <span className="toggle-switch" />
      </label>
      <span>{isAnnual ? 'Annual Plans' : 'Monthly Plans'}</span>
    </div>
  );
};

export default Toggle;