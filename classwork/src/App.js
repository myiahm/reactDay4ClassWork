import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kindle from './Kindle';
import TwoPlayerScoreKeeper from "./TwoPlayerScoreKeeper";

class App extends Component {
  render() {
    return (
      <div><div>
          <Kindle/></div>
        <h1> CLICKER GAME </h1>
        <div>
          <TwoPlayerScoreKeeper/>
        </div>
      </div>

    );
  }
}

export default App;
