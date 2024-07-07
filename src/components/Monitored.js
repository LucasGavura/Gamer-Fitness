// src/components/Monitored.js
import React, { useState } from 'react';
import './Monitored.css';

const Monitored = () => {
  const [rows, setRows] = useState([{ exercise: '', sets: '', reps: '', notes: '' }]);

  const handleAddRow = () => {
    setRows([...rows, { exercise: '', sets: '', reps: '', notes: '' }]);
  };

  const handleChange = (index, event) => {
    const newRows = rows.map((row, rowIndex) => (
      rowIndex === index ? { ...row, [event.target.name]: event.target.value } : row
    ));
    setRows(newRows);
  };

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
          {rows.map((row, index) => (
            <tr key={index}>
              <td><input type="text" name="exercise" value={row.exercise} onChange={(e) => handleChange(index, e)} /></td>
              <td><input type="number" name="sets" value={row.sets} onChange={(e) => handleChange(index, e)} /></td>
              <td><input type="number" name="reps" value={row.reps} onChange={(e) => handleChange(index, e)} /></td>
              <td><input type="text" name="notes" value={row.notes} onChange={(e) => handleChange(index, e)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow} className="add-row-btn">Add Row</button>
    </section>
  );
};

export default Monitored;