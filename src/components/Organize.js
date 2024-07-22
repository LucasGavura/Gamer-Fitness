import React, { useState } from 'react';
import './Organize.css';

const Organize = () => {
  const [goal, setGoal] = useState('');
  const [submittedGoals, setSubmittedGoals] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal.trim() !== '') {
      const newGoal = { text: goal, time: new Date().toLocaleString() };
      setSubmittedGoals([...submittedGoals, newGoal]);
      setGoal('');
    }
  };

  const handleCheck = (index) => {
    setTimeout(() => {
      const newGoals = [...submittedGoals];
      newGoals.splice(index, 1);
      setSubmittedGoals(newGoals);
    }, 100);
  };

  return (
    <section id="organize" className="organize">
      <h2>Goal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter your goal"
        />
        <button type="submit">Submit</button>
        <ul className="filler-text">
          <li>You can enter your goals here for your future self</li>
          <li>The time you created them will be visible, so you can look back on your ambitions</li>
          <li>Good luck in your fitness dreams!</li>
        </ul>
      </form>
      <div className="goal-list">
        {submittedGoals.map((goal, index) => (
          <div key={index} className="goal-item">
            <div className="goal-text">{goal.text}</div>
            <div className="goal-info">
              <span className="goal-time">{goal.time}</span>
              <input
                type="checkbox"
                onChange={() => handleCheck(index)}
                className="goal-checkbox"
                checked={false}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organize;
