import React, { Component, Fragment } from 'react';
import './TextInput.css';

class TextInput extends Component {
  render () {
    const { input, inputChange } = this.props;

    return (
      <Fragment>
        <input
          type="text"
          className="text-input"
          placeholder="텍스트를 입력해주세요."
          value={ input }
          onChange={ inputChange }
        />
      </Fragment>
    );
  }
}

export default TextInput;