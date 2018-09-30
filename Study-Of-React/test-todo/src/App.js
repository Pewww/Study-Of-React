import React, { Component } from 'react';
import PageTemplate from './components/PageTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  id = 0;
  getId = () => {
    return ++this.id;
  }

  state = {
    input: '',
    todoArray: []
  };

  handleInput = ({ target }) => {
    this.setState({
      input: target.value
    });
  }

  handleInsert = () => {
    const { input, todoArray } = this.state;
    const todoList = {
      todo: input,
      done: false,
      id: this.getId()
    };

    console.log('handleInsert: ' + input);

    this.setState({
      todoArray: [...todoArray, todoList],
      input: ''
    });
  }

  doneToggle = (id) => {
    const { todoArray } = this.state; // TodoList Array
    const index = todoArray.findIndex(todo => todo.id === id); // 클릭한 index

    const toggled = {
      ...todoArray[index],
      done: !todoArray[index].done
    };

    this.setState({
      todoArray: [
        ...todoArray.slice(0, index),
        toggled,
        ...todoArray.slice(index + 1, todoArray.length)
      ]
    });
  }

  deleteTodo = (id) => {
    const { todoArray } = this.state;
    const deleteIndex = todoArray.findIndex(todo => todo.id === id);
    console.log(...todoArray.slice(0, deleteIndex));
    console.log(...todoArray.slice(deleteIndex + 1, todoArray.length));

    this.setState({
      todoArray: [
        ...todoArray.slice(0, deleteIndex),
        ...todoArray.slice(deleteIndex + 1, todoArray.length)
      ]
    });
  }

  render() {
    const { handleInput, handleInsert, doneToggle, deleteTodo } = this;
    const { input, todoArray } = this.state;

    return (
      <div className="App">
        <PageTemplate>
          <TodoInput changeInput={ handleInput } input={ input } todoInsert={ handleInsert }/>
          <TodoList todoDatas={ todoArray } doneToggle={ doneToggle } deleteTodo={ deleteTodo }/>
        </PageTemplate>
      </div>
    );
  }
}

export default App;
