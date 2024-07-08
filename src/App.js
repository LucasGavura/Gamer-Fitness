import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Divergence from './components/Divergence';
import Monitored from './components/Monitored';
import Organize from './components/Organize';
import Chat from './components/Chat';
import Absorb from './components/Absorb';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/divergence" component={Divergence} />
            <Route path="/monitored" component={Monitored} />
            <Route path="/organize" component={Organize} />
            <Route path="/chat" component={Chat} />
            <Route path="/how-to-lift" component={Absorb} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
