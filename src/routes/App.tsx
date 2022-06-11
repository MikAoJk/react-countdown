import React from 'react';
import {Countdown} from "../components/Countdown";
import logo from '../assets/red_nav_logo.svg';
import './App.css'

function App () {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="Nav-logo" alt="nav logo" />
            </div>
            <h3 className="title">Starting to work at NAV IT (1st of February 2022)</h3>
            <Countdown date={`2022-01-31T00:00:00`} />
        </div>
    );
}

export default App;
