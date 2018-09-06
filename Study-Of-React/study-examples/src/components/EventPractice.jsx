import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    name: ''
  }

  inputEvent = ({ target }) => {
    const { value } = target;

    this.setState({
      [ target.name ]: value
    });
  }

  render () {
    return (
      <div>
        <h1>App</h1>
        <input
          type="text"
          name="name"
          placeholder="이름을 입력해주세요."
          value={ this.state.name }
          onChange={ this.inputEvent }
        />
        <div>입력한 값: { this.state.name }</div>
      </div>
    );
  }
}

export default EventPractice;