import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlienCharachter from "./AlienCharachter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome</h1>
        </header>
        <AlienCharachter/>
      </div>
    );
  }
}

export default App;
