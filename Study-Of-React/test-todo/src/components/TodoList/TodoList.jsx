import React, { Component } from 'react';
import TodoItem from '../TodoItem';
import './TodoList.css';

class TodoList extends Component {
  render () {
    const { todoDatas, doneToggle, deleteTodo } = this.props;
    const listingDatas = todoDatas.map(list => (
      <TodoItem
        key={ list.id }
        done={ list.done }
        todo={ list.todo }
        doneToggle={ () => doneToggle(list.id) }
        deleteTodo={ () => deleteTodo(list.id) }
      />
    ));

    return (
      <ul className="todos-cover">
        { listingDatas }
      </ul>
    );
  }
}

export default TodoList;