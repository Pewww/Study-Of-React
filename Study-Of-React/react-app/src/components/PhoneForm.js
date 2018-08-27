import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    age: 0
  }

  handleInput = ({ target }) => {
    this.setState({
      [ target.name ]: target.value
    });
  }

  submitInputData = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      age: 0
    })
  }

  render () {
    return (
      <form onSubmit={ this.submitInputData }>
        <input
          type="text"
          name="name"
          value={ this.state.name }
          placeholder="이름"
          onChange={ this.handleInput }
        />
        <input
          type="number"
          name="age"
          value={ this.state.age }
          placeholder="나이"
          onChange={ this.handleInput }
        />
        <button type="submit">Send Data</button>
        { this.props.value }
      </form>
    );
  }
}

export default PhoneForm;