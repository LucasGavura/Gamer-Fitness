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
      <Navbar />
      <Home />
      <Divergence />
      <Absorb />
      <Monitored />
    </div>
  );
}

export default App;