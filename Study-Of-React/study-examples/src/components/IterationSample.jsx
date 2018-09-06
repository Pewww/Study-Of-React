import React, { Component } from 'react';

class IterationSample extends Component {
  render () {
    const { names } = this.props;

    const nameList = names.map(name => (
      <li key={ name.key }>{ name.name }</li>
    ));

    return (
      <ul>
        { nameList }
      </ul>
    );
  }
}

export default IterationSample;