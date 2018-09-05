import React, { Component } from 'react';

class IterationSample extends Component {
  render () {
    const names = [
      { name: '눈사람', key: 0 },
      { name: '얼음', key: 1 },
      { name: '눈', key: 2 },
      { name: '바람', key: 3 },
    ];
    const nameList = names.map(name => (
      <li key={ name.key }>{ name.name }</li>
    ));

    return (
      <ul>
        <li>{ nameList }</li>
      </ul>
    );
  }
}

export default IterationSample;