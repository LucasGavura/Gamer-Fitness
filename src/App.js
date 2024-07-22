import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Divergence from './components/Divergence';
import Monitored from './components/Monitored';
import Organize from './components/Organize';
import Chat from './components/Chat';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'fr' : 'en'));
  };

  return (
    <div className="App">
      <Navbar toggleLanguage={toggleLanguage} language={language} />
      <div className="container1">
        <Home language={language} />
      </div>
      <div className="container2">
        <Divergence />
      </div>
      <div className="container3">
        <Monitored />
      </div>
      <div className="container4">
        <Organize />
      </div>
      <Chat />
    </div>
  );
}

export default App;
