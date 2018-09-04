import React, { Component } from 'react';
import '../style/ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false
  }

  handleChange = ({ target }) => {
    this.setState({
      password: target.value
    });
  }

  handleBtnClick = () => {
    const { password } = this.state;

    this.setState({
      clicked: true,
      validated: password === 'ehdgoanfrhkqorentks'
    });

    this.input.focus();
  }

  render () {
    const { password, clicked, validated } = this.state;
    const { handleChange, handleBtnClick } = this;

    return (
      <div>
        <input
          type="password"
          value={ password }
          onChange={ handleChange }
          className={ clicked ? ( validated ? 'success' : 'failure' ) : '' }
          ref={ (ref) => this.input = ref }
        />
        <button onClick={ handleBtnClick }>Validate</button>
      </div>
    );
  }
}

export default ValidationSample;