import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  state = {
    number: 0
  }

  static defaultProps = {
    adjective: 'fantastic'
  }

  static propTypes = {
    adjective: PropTypes.string,
    name: PropTypes.string.isRequired,
  }

  increaseNumber = (e) => {
    let { number } = this.state;

    this.setState({
      number: number + 1
    });
  }

  render () {
    const text = 'Hello';
    const { name: propsVal, adjective: adj } = this.props;

    return (
      <div>
        { text } { adj } world! - { propsVal }
        <button onClick={ this.increaseNumber }>Click to increase number.</button>
        <span>{ this.state.number }</span>
      </div>
    );
  }
}

export default MyComponent;