import React from 'react';
import styles from './TodoInput.css';
import classNames from 'classnames';

const cx = classNames.bind(styles);

const TodoInput = ({ value, onChange, onInsert }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter'/* && value !== '' */) {
      // 상위 컴포넌트 (App.js)에서 Validation Check를 해주기 때문에 주석 처리함.
      onInsert();
    }
  }

  return (
    <div className={ cx('todo-input') }>
      <input
        type="text"
        onChange={ onChange }
        value={ value }
        onKeyPress={ handleKeyPress }
        placeholder="일정을 입력해주세요."
      />
      <div className={ cx('add-button') } onClick={ onInsert }>
        추가
      </div>
    </div>
  );
}

export default TodoInput;