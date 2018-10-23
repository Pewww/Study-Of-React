import React, { Component } from 'react';
import './App.css';
import CircleCounterContainer from './CircleCounterContainer';

class App extends Component {
  render () {
    return (
      <div className="app">
        <CircleCounterContainer />
      </div>
    );
  }
}

export default App;
