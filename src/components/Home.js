// src/components/Home.js
import React from 'react';
import './Home.css';
import homeImage from '../images/Home.png';

const Home = () => {
  return (
    <section id="home" className="home" style={{ backgroundImage: `url(${homeImage})` }}>
      <h1>Your Journey Starts Here</h1>
      <p>Welcome to Gamer Fitness...</p>
      <button className="home-button">Get Started</button>
    </section>
  );
};

export default Home;