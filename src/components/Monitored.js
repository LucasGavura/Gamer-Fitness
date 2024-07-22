import React, { useState } from 'react';
import './Monitored.css';

const Monitored = () => {
  const [rows, setRows] = useState([{ type: '', amount: '', weight: '', date: '' }]);

  const handleAddRow = () => {
    setRows([...rows, { type: '', amount: '', weight: '', date: '' }]);
  };

  const handleDeleteRow = (index) => {
    const newRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(newRows);
  };

  const handleChange = (index, event) => {
    const newRows = rows.map((row, rowIndex) => (
      rowIndex === index ? { ...row, [event.target.name]: event.target.value } : row
    ));
    setRows(newRows);
  };

  const isRowIncomplete = (row) => {
    return !row.type || !row.amount || !row.weight || !row.date;
  };

  return (
    <section id="monitor" className="monitored">
      <h2>Workout Information</h2>
      <table className="workout-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Weight</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={isRowIncomplete(row) ? 'incomplete-row' : ''}>
              <td><input type="text" name="type" placeholder="Enter workout type" value={row.type} onChange={(e) => handleChange(index, e)} /></td>
              <td><input type="number" name="amount" placeholder="Enter reps done" value={row.amount} onChange={(e) => handleChange(index, e)} /></td>
              <td><input type="number" name="weight" placeholder="Enter weight (lbs)" value={row.weight} onChange={(e) => handleChange(index, e)} /></td>
              <td><input type="date" name="date" placeholder="Date" value={row.date} onChange={(e) => handleChange(index, e)} /></td>
              <td><button onClick={() => handleDeleteRow(index)} className="delete-row-btn">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow} className="add-row-btn">Add Row</button>
      <button className="export-btn">Export Data</button>
    </section>
  );
};

export default Monitored;