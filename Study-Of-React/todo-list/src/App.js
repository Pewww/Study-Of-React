import React, { Component } from 'react';
import MyComponent from './components/MyComponent';
import EventPractice from './components/EventPractice';
import ValidationSample from './components/ValidationSample';
import ScrollBox from './components/ScrollBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent name="Props-Value"/>
        <EventPractice />
        <ValidationSample />
        <ScrollBox ref={ ref => this.scrollBox = ref }/>
        <button onClick={ () => this.scrollBox.scrollToBottom() }>
          Scroll To Bottom
        </button>
      </div>
    );
  }
}

export default App;
