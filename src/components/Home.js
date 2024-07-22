import React from 'react';
import './Home.css';
import homeImage from '../images/Home.png';

const scrollToDivergence = () => {
  const element = document.getElementById('divergence');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const translations = {
  en: {
    title: "Your Journey Starts Here",
    welcome: "Welcome to Gamer Fitness",
    button: "Get Started"
  },
  fr: {
    title: "Votre voyage commence ici",
    welcome: "Bienvenue chez Gamer Fitness",
    button: "Commencer"
  }
};

const Home = ({ language }) => {
  return (
    <section id="home" className="home" style={{ backgroundImage: `url(${homeImage})` }}>
      <h1>{translations[language].title}</h1>
      <p>{translations[language].welcome}</p>
      <button onClick={scrollToDivergence} className="home-button">{translations[language].button}</button>
    </section>
  );
};

export default Home;
