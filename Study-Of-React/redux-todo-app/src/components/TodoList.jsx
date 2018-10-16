import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    // 리렌더링 최적화
    console.log('shouldComponentUpdate의 nextProps');
    console.log(nextProps);
    console.log('실제 props의 todos');
    const { todos } = this.props;
    console.log(todos);
    return todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(
      todo => (
        <TodoItem
          key={todo.get('id')}
          done={todo.get('done')}
          onToggle={() => onToggle(todo.get('id'))}
          onRemove={() => onRemove(todo.get('id'))}>
          {todo.get('text')}
        </TodoItem>
      )
    );

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoList;