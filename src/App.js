import React, { Component } from 'react';
import Countdown from './Countdown.js';
import navLogo from './Sort.svg';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={navLogo} className="Nav-logo" alt="nav logo" />
          </div>
          <h3 className="title">Starting to work at NAV IT (1. februar 2022) in</h3>
          <Countdown date={`2022-01-31T00:00:00`} />
        </div>
    );
  }
}

export default App;