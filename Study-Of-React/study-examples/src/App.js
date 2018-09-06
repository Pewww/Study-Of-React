import React, { Component } from 'react';
import MyComponent from './components/MyComponent';
import EventPractice from './components/EventPractice';
import ValidationSample from './components/ValidationSample';
import ScrollBox from './components/ScrollBox';
import IterationSample from './components/IterationSample';
import IterationComponent from './components/IterationComponent';
import AddList from './components/AddList';
import DerivedCycle from './components/DerivedCycle';
import './App.css';

class App extends Component {
  render() {
    const lists = [
      { name: '눈사람', key: 0 },
      { name: '얼음', key: 1 },
      { name: '눈', key: 2 },
      { name: '바람', key: 3 },
    ];

    const names = ['Pewww', 'Caden', 'Yunjae', 'JYJ'];
    const derivedVal = 'getDerivedStateFromProps Life Cycle Test';

    return (
      <div className="App">
        {/*<MyComponent name="Props-Value"/>
        <EventPractice />
        <ValidationSample />
        <ScrollBox ref={ ref => this.scrollBox = ref }/>
        <button onClick={ () => this.scrollBox.scrollToBottom() }>
          Scroll To Bottom
        </button>
        <h2>Simple Iteration1</h2>
        <IterationSample names={ lists } />
        <IterationComponent yunjaes={ names } />*/}
        <AddList />
        <DerivedCycle propVal={ derivedVal } />
      </div>
    );
  }
}

export default App;
