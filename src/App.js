// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Divergence from './components/Divergence';
import Absorb from './components/Absorb';
import Monitored from './components/Monitored';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
      </div>
      <div className="container">
        <Home />
      </div>
      <div className="container">
        <Divergence />
      </div>
      <div className="container">
        <Absorb />
      </div>
      <div className="container">
        <Monitored />
      </div>
    </div>
  );
}

export default App;