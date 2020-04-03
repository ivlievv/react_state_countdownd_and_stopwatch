import React, { Component } from 'react';
import './App.css';
import Stopwatch from "./conponents/Stopwatch";
import Countdown from "./Countdown";


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-title">Timers Demo</div>
                <div className="Timers">
                    <Stopwatch />
                    <Countdown />
                </div>
            </div>
        );
     }
}
export default App;