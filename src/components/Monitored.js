// src/components/Monitored.js
import React from 'react';
import './Monitored.css';

const Monitored = () => {
  return (
    <section className="monitored">
      <h2>Workout Information</h2>
      <table className="workout-table">
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" placeholder="Exercise" /></td>
            <td><input type="number" placeholder="Sets" /></td>
            <td><input type="number" placeholder="Reps" /></td>
            <td><input type="text" placeholder="Notes" /></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Monitored;