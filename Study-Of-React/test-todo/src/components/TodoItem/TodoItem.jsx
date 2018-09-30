import React, { Component } from 'react';
import styles from './TodoItem.css';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class TodoItem extends Component {
  render () {
    const { done, todo, doneToggle, deleteTodo } = this.props;
    const todoClass = cx({
      'todo-text': true,
      'test': done
    });

    return (
      <li className={cx('todo-list')} onClick={ doneToggle }>
        <span className={ todoClass }>{ todo }</span>
        <span className={cx('todo-delete')} onClick={ (e) => {
          deleteTodo();
          e.stopPropagation();
        } }>X</span>
      </li>
    );
  }
}

export default TodoItem;