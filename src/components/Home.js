import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Home.css';
import homeImage from '../images/Home.png';

const Home = () => {
  return (
    <section id="home" className="home" style={{ backgroundImage: `url(${homeImage})` }}>
      <h1>Your Journey Starts Here</h1>
      <p>Welcome to Gamer Fitness</p>
      <ScrollLink to="divergence" smooth={true} duration={500}>
        <button className="home-button">Get Started</button>
      </ScrollLink>
    </section>
  );
};

export default Home;
