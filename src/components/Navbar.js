import React from 'react';
import './Navbar.css';

const translations = {
  en: {
    home: 'Home',
    plans: 'Our Plans',
    learnMore: 'Learn More',
    trackWorkouts: 'Track Workouts',
    setGoals: 'Set Goals',
    language: 'Français'
  },
  fr: {
    home: 'Accueil',
    plans: 'Nos Plans',
    learnMore: 'Savoir Plus',
    trackWorkouts: 'Suivre les Entraînements',
    setGoals: 'Fixer des Objectifs',
    language: 'Anglais'
  }
};

const scrollToDivergence = () => {
  const element = document.getElementById('divergence');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = ({ toggleLanguage, language }) => {
  const t = translations[language];

  return (
    <nav className="navbar">
      <div className="navbar-logo">Gamer Fitness</div>
      <ul className="navbar-links">
        <li><a href="#home">{t.home}</a></li>
        <li><a href="#divergence" onClick={scrollToDivergence}>{t.plans}</a></li>
        <li><a href="#monitor">{t.trackWorkouts}</a></li>
        <li><a href="#organize">{t.setGoals}</a></li>
        <li>
          <button onClick={toggleLanguage} className="navbar-button">
            {t.language}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
