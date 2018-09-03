import React, { Component, Fragment } from 'react';

class Counter extends Component {
  state = {
    count: 0
  }

  increaseCount = () => {
    const { count: c } = this.state;

    this.setState({
      count: c + 1
    });
  }

  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render () {
    return (
      <div>
        <Fragment>
          <button onClick={ this.increaseCount }>+</button>
          <button onClick={ this.decreaseCount }>-</button>
        </Fragment>
        <div>카운트: { this.state.count }</div>
      </div>
    );
  }
}

export default Counter;