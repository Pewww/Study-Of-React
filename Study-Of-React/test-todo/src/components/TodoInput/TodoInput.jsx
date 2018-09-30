import React from 'react';
import './TodoInput.css';

const TodoInput = ({ changeInput, input, todoInsert }) => {
  const keyPressInsert = (e) => {
    if (e.key === 'Enter' && input !== '') {
      todoInsert();
    }
  }

  return (
    <div className="input-cover">
      <input
        value={ input }
        onChange={ changeInput }
        onKeyPress={ keyPressInsert }
        placeholder="할 일을 입력해주세요."
        name="todo"
        className="todo-input"
      />
      <button
        className="todo-button"
        onClick={ todoInsert }
      >+</button>
    </div>
  );
}

export default TodoInput;