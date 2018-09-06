import React, { Component } from 'react';

class DerivedCycle extends Component {
  state = {
    value: 'Hello State!'
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    console.log(nextProps, prevState);
    if (nextProps.propVal !== prevState.value) {
      console.log(nextProps, prevState);
      return { value: nextProps.propVal };
    }

    return null;
  }

  render () {
    return (
      <div>Hello - { this.state.value }</div>
    );
  }
}

export default DerivedCycle;