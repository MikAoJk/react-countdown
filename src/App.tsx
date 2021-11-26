import React from 'react';
import Countdown from "./Countdown";
import logo from './Rød.svg';

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