import React, { Component } from 'react';
import MyComponent from './components/MyComponent';
import EventPractice from './components/EventPractice';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent name="Props-Value"/>
        <EventPractice />
      </div>
    );
  }
}

export default App;
