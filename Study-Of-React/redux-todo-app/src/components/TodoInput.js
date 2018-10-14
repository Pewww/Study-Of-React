import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './TodoInput.css';

const TodoInput = ({ addTodo, changeInput, input }) => {
  return (
    <Fragment>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        className="todo-input"
        value={ input }
        onChange={ changeInput }
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            addTodo();
          }
        }}
      />
    </Fragment>
  );
};

TodoInput.propTypes = {
  addTodo: PropTypes.func,
  changeInput: PropTypes.func,
  input: PropTypes.string
};

TodoInput.defaultProps = {
  addTodo: () => console.warn('Function is not defined'),
  changeInput: () => console.warn('Function is not defined'),
  input: () => console.warn('input is not defined')
};

export default TodoInput;