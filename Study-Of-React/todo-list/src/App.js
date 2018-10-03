import React, { Component } from 'react';
import PageTemplate from './components/PageTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.scss';

// 임시 데이터
const testDatas = new Array(500).fill(0).map((foo, index) => (
  {
    id: index,
    text: `일정 ${ index }`,
    done: false,
  }
));

class App extends Component {
  state = {
    input: '', // 인풋의 값
    // 일정 데이터 초기값
    todos: testDatas,
  }

  // 일정 데이터 안에 들어가는 id 값
  id = 1
  getId = () => {
    return ++this.id; // 현재 값에서 1을 더한 값을 반환
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      input: value
    });
  }

  // 새 데이터 추가
  handleInsert = () => {
    const { todos, input } = this.state;

    // 새 데이터 객체 생성
    if (input !== '') {
      const newTodo = {
        text: input,
        done: false,
        id: this.getId()
      };

      this.setState({
        todos: [...todos, newTodo],
        input: ''
      });
    }
  }

  // 투두아이템 토글하기
  handleToggle = (id) => {
    // id 로 배열의 인덱스를 찾습니다.
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    
    // 찾은 데이터의 done 값을 반전시킵니다.
    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };

    // slice 를 통하여 우리가 찾은 index 전 후의 데이터들을 복사합니다
    // 그리고 그 사이에는 변경된 투두 객체를 넣어줍니다.
    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    // slice 로 전 후 데이터들을 복사하고, 우리가 찾은 index 는 제외시킵니다.
    this.setState({
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  render() {
    const { input, todos } = this.state;
    const { 
      handleChange,
      handleInsert,
      handleToggle,
      handleRemove
    } = this;

    return (
      <PageTemplate>
        <TodoInput
          onChange={ handleChange }
          onInsert={ handleInsert }
          value={ input }
        />
        <TodoList
          todos={ todos }
          onToggle={ handleToggle }
          onRemove={ handleRemove }
        />
      </PageTemplate>
    );
  }

}

export default App;
